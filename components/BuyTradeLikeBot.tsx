"use client";

import { useState, useEffect } from "react";
import apiClient from "@/libs/api";
import { useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import config from "@/config";
import AuthModal from "./AuthModal";

const checkUserAccess = async () => {
  try {
    const response = await fetch('/api/check-access', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    return data.hasAccess;
  } catch (error) {
    console.error('Error checking user access:', error);
    return false;
  }
};

const BuyTradeLikeBot = ({
  text = "Get started",
  extraStyle,
  priceId,
}: {
  text?: string;
  extraStyle?: string;
  priceId: string;
}) => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const searchParams = useSearchParams();
  const redirectToCheckout = searchParams.get("redirectToCheckout");
  const savedPriceId = searchParams.get("priceId");
  const successUrl =
    process.env.NODE_ENV === "development"
      ? `http://${config.domainName}/bot/dashboard`
      : `https://${config.domainName}/bot/dashboard`;

  useEffect(() => {
    const handleRedirect = async () => {
      if (status === "authenticated" && redirectToCheckout && savedPriceId) {
        const hasAccess = await checkUserAccess();
        if (hasAccess) {
          router.push("/bot/dashboard");
        } else {
          await handlePayment("payment", savedPriceId);
        }
      }
    };

    handleRedirect();
  }, [status, redirectToCheckout, savedPriceId]);

  const handlePayment = async (mode: string, priceId: string) => {
    setIsLoading(true);

    try {
      const { url }: { url: string } = await apiClient.post(
        "/stripe/create-checkout",
        {
          priceId,
          successUrl: successUrl,
          cancelUrl: window.location.href,
          mode: mode,
        }
      );

      window.location.href = url;
    } catch (e) {
      console.error(e);
      setIsLoading(false);
    }
  };

  const handleClick = async () => {
    if (status === "authenticated") {
      const hasAccess = await checkUserAccess();
      if (hasAccess) {
        router.push("/bot/dashboard");
      } else {
        await handlePayment("payment", priceId);
      }
    } else {
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <button
        className={`btn btn-gradient-green ${extraStyle}`}
        onClick={handleClick}
        disabled={isLoading}
      >
        {isLoading ? (
          <span className="loading loading-spinner loading-xs"></span>
        ) : (
          text
        )}
      </button>
      <AuthModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} priceId={priceId} />
    </>
  );
};

export default BuyTradeLikeBot;
