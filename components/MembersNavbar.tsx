"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import ButtonAccount from "./ButtonAccount";
import logo from "@/images/logo.png";
import config from "@/config";

const links: {
  href: string;
  label: string;
}[] = [
  {
    href: "https://www.binance.com/en",
    label: "Binance Portal",
  },
  {
    href: "/#bot-faq",
    label: "FAQ",
  },
  {
    href: "https://www.binance.com/en/event/new_user_guide",
    label: "How to Register and Deposit",
  },
];

const MembersNavbar = () => {
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // setIsOpen(false) when the route changes (i.e: when the user clicks on a link on mobile)
  useEffect(() => {
    setIsOpen(false);
  }, [searchParams]);

  return (
    <nav className="container flex items-center justify-between px-8 duration-100 ease-in-out pt-8 pb-8 mx-auto" aria-label="Global">
      {/* Your logo/name on large screens */}
      <div className="flex lg:flex-1">
        <Link href="/" passHref legacyBehavior>
          <a className="flex items-center gap-2 shrink-0" title={`${config.appName} homepage`}>
            <div className="flex items-center">
              <Image
                alt={`${config.appName} logo`}
                src={logo}
                fetchPriority="high"
                width={112}
                height={112}
                decoding="async"
                className="mr-2 w-[112px] sm:w-[112px]"
                style={{ color: 'transparent' }}
              />
              <span className="font-semibold text-white text-[16px] sm:text-[20px]">{config.appName}</span>
            </div>
          </a>
        </Link>
      </div>

      {/* Burger button to open menu on mobile */}
      <div className="flex lg:hidden">
        <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5" onClick={() => setIsOpen(!isOpen)}>
          <span className="sr-only">Open main menu</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-base-content">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>

      {/* Your links on large screens */}
      <div className={`justify-center gap-12 items-center font-semibold text-base ${isOpen ? 'flex' : 'hidden'} lg:flex`}>
        {links.map((link) => (
          <Link href={link.href} key={link.href} passHref legacyBehavior>
            <a className="link no-underline hover:text-slate-100" title={link.label}>
              {link.label}
            </a>
          </Link>
        ))}
      </div>

      {/* CTA on large screens */}
      <div className="hidden lg:flex lg:justify-end lg:flex-1">
        <ButtonAccount />
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`relative z-50 ${isOpen ? "block" : "hidden"} lg:hidden`}>
        <div className="fixed inset-y-0 right-0 w-full px-8 py-4 overflow-y-auto bg-base-200 sm:max-w-sm sm:ring-1 sm:ring-neutral/10">
          {/* Your logo/name on small screens */}
          <div className="flex items-center justify-between">
            <Link href="/" passHref legacyBehavior>
              <a className="flex items-center gap-2 shrink-0" title={`${config.appName} homepage`}>
                <Image
                  alt={`${config.appName} logo`}
                  src={logo}
                  fetchPriority="high"
                  width={112}
                  height={112}
                  decoding="async"
                  className="mr-2 w-[112px] sm:w-[112px]"
                  style={{ color: 'transparent' }}
                />
                <span className="font-semibold text-white text-[16px] sm:text-[20px]">{config.appName}</span>
              </a>
            </Link>
            <button type="button" className="-m-2.5 rounded-md p-2.5" onClick={() => setIsOpen(false)}>
              <span className="sr-only">Close menu</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Your links on small screens */}
          <div className="flow-root mt-6">
            <div className="py-4">
              <div className="flex flex-col gap-y-4 items-start">
                {links.map((link) => (
                  <Link href={link.href} key={link.href} passHref legacyBehavior>
                    <a className="link link-hover" title={link.label} onClick={() => setIsOpen(false)}>
                      {link.label}
                    </a>
                  </Link>
                ))}
              </div>
            </div>
            <div className="divider"></div>
            {/* Your CTA on small screens */}
            <div className="flex flex-col">
              <ButtonAccount />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MembersNavbar;
