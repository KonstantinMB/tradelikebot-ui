"use client";

import { useState, useRef } from "react";
import type { JSX } from "react";
import Image from "next/image";
import proven_strategy from "@/images/proven-strategy.jpg"
import algo_bot from "@/images/algo-bot.jpg";

interface Feature {
  title: string;
  description: string;
  type?: "video" | "image";
  path?: string;
  format?: string;
  alt?: string;
  svg?: JSX.Element;
}

const features = [
  {
    title: "Quick & Easy Setup",
    description:
      "Run your trading bot in minutes!",
    type: "video",
    path: "",
    format: "video/webm",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    title: "Algo Bot",
    description:
      "A bot that automatically does all trading for you, leaving emotions out the window!",
    type: "image",
    path: proven_strategy,
    alt: "A well-tested Binance crypto trading bot!",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 3h18v18H3z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7 14l3-3 2 2 4-4"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7 10h0.01"
        />
      </svg>
    ),
  },
  {
    title: "Proven Strategy",
    description:
      "Our trading strategy has been proven both via backtesting and live trading! The bot uses different indicators & techincal analysis to determine it's next move!",
    type: "image",
    path: algo_bot,
    alt: "A proven trading strategy",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
        />
      </svg>
    ),
  },
  {
    title: "Monitoring & Freedom",
    description:
      "The bot is integrated directly with your Binance account, giving you the freedom to utilize the platform for monitoring, manual intervantion & analysis on the bots behaviour!",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
  {
    title: "Seamless Way To Interact",
    description:
      "A dashboard to interact with the bot. Run it, stop it, monitor the trades status, look at the chart of your chosen trading pair and much more..",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
        />
      </svg>
    ),
  },
] as Feature[];

const Item = ({
  feature,
  isOpen,
  setFeatureSelected,
}: {
  index: number;
  feature: Feature;
  isOpen: boolean;
  setFeatureSelected: () => void;
}) => {
  const accordion = useRef(null);
  const { title, description, svg } = feature;

  return (
    <li>
      <button
        className="relative flex gap-2 items-center w-full py-5 text-base font-medium text-left md:text-lg"
        onClick={(e) => {
          e.preventDefault();
          setFeatureSelected();
        }}
        aria-expanded={isOpen}
      >
        <span className={`duration-100 ${isOpen ? "text-success" : ""}`}>
          {svg}
        </span>
        <span
          className={`flex-1 text-base-content ${
            isOpen ? "text-success font-semibold" : ""
          }`}
        >
          <h3 className="inline">{title}</h3>
        </span>
      </button>

      <div
        ref={accordion}
        className={`transition-all duration-300 ease-in-out text-base-content-secondary overflow-hidden`}
        style={
          isOpen
            ? { maxHeight: accordion?.current?.scrollHeight, opacity: 1 }
            : { maxHeight: 0, opacity: 0 }
        }
      >
        <div className="pb-5 leading-relaxed">{description}</div>
      </div>
    </li>
  );
};

const Media = ({ feature }: { feature: Feature }) => {
  const { type, path, format, alt } = feature;
  const style = "rounded-2xl aspect-square w-full sm:w-[26rem]";
  const size = {
    width: 500,
    height: 500,
  };

  if (type === "video") {
    return (
      <video
        className={style}
        autoPlay
        muted
        loop
        playsInline
        controls
        width={size.width}
        height={size.height}
      >
        <source src={path} type={format} />
      </video>
    );
  } else if (type === "image") {
    return (
      <Image
        src={path}
        alt={alt}
        className={`${style} object-cover object-center`}
        width={size.width}
        height={size.height}
      />
    );
  } else {
    return <div className={`${style} !border-none`}></div>;
  }
};

const FeaturesAccordion = () => {
  const [featureSelected, setFeatureSelected] = useState<number>(0);

  return (
    <section
      className="pt-5 md:pb-10 space-y-24 md:space-y-32 max-w-7xl mx-auto bg-base-100 "
      id="features"
    >
      <div className="px-8">
        <div className=" flex flex-col md:flex-row gap-12 md:gap-24">
          <div className="grid grid-cols-1 items-stretch gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-20">
            <ul className="w-full">
              {features.map((feature, i) => (
                <Item
                  key={feature.title}
                  index={i}
                  feature={feature}
                  isOpen={featureSelected === i}
                  setFeatureSelected={() => setFeatureSelected(i)}
                />
              ))}
            </ul>

            <Media feature={features[featureSelected]} key={featureSelected} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesAccordion;
