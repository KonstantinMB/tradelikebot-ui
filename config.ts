import themes from "daisyui/src/theming/themes";
import { ConfigProps } from "./types/config";

const config = {
  appName: "TradingLikeBot",
  appDescription:
    "Automate Your Crypto Trading for Maximum Profit. Maximize Your Profits and Minimize Risks by Leaving Emotional Decisions Behind!",
  domainName: process.env.NEXT_PUBLIC_DOMAIN_NAME,
  crisp: {
    id: process.env.NEXT_PUBLIC_CRISP_ID,
    onlyShowOnRoutes: ["/"],
  },
  stripe: {
    // Create multiple plans in your Stripe dashboard, then add them here. You can add as many plans as you want, just make sure to add the priceId
    plans: [
      {
        // REQUIRED — we use this to find the plan in the webhook (for instance if you want to update the user's credits based on the plan)
        priceId:
          process.env.NODE_ENV === "development"
            ? process.env.NEXT_PUBLIC_STRIPE_CRYPTO_BOT_PRICE_ID_DEV
            : process.env.NEXT_PUBLIC_STRIPE_CRYPTO_BOT_PRICE_ID_PROD,
        //  REQUIRED - Name of the plan, displayed on the pricing page
        name: "Starter",
        // A friendly description of the plan, displayed on the pricing page. Tip: explain why this plan and not others
        description: "Algo trading bot that utilizes the Binance Exchange alongside custom indicators to generate profit for the user.",
        // The price you want to display, the one user will be charged on Stripe.
        price: 20,
        // If you have an anchor price (i.e. $29) that you want to display crossed out, put it here. Otherwise, leave it empty
        priceAnchor: 100,
        isFeatured: true,
        features: [
          {
            name: "Algo Trading Bot Running In The Cloud", 
          },
          {
            name: "24/7 Support In Case Of Any Questions / Queries"
          }, 
          {
            name: "Discord Community Of Like-Minded Individuals"
          }, 
          {
            name: "Ability To Run The Bot 24/7 Without Laptop ON!"
          }, 
           {
            name: "Support For Up To 6 Different Cryptocurrencies"
          },
          {
            name: "Integration With Binance"
          }, 
        ],
      },
    ],
  },
  mail: {
    supportEmail: process.env.NEXT_PUBLIC_SUPPORT_EMAIL
  },
  colors: {
    // REQUIRED — The DaisyUI theme to use (added to the main layout.js). Leave blank for default (light & dark mode). If you any other theme than light/dark, you need to add it in config.tailwind.js in daisyui.themes.
    theme: "",
    main: themes["night"]["primary"],
  },
  auth: {
    loginUrl: "/api/auth/signin",
    callbackUrl: "/pricing",
  },
} as ConfigProps;

export default config;
