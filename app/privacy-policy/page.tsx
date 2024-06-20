import Link from "next/link";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";

export const metadata = getSEOTags({
  title: `Privacy Policy | ${config.appName}`,
  canonicalUrlRelative: "/privacy-policy",
});

const PrivacyPolicy = () => {
  return (
    <main className="max-w-xl mx-auto">
      <div className="p-5">
        <Link href="/" className="btn btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z"
              clipRule="evenodd"
            />
          </svg>{" "}
          Back
        </Link>
        <h1 className="text-3xl font-extrabold pb-6">
          Privacy Policy for {config.appName}
        </h1>

        <pre
          className="leading-relaxed whitespace-pre-wrap"
          style={{ fontFamily: "sans-serif" }}
        >
          {`Privacy Policy

Effective Date: June 2, 2024

Introduction

Welcome to TradeLikeBot. We are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. This Privacy Policy outlines how we collect, use, and protect your information.

Information We Collect

Personal Data: We collect the following personal information:

Name
Email
Payment information
API Keys/Secrets to access Brokerage account

Non-Personal Data: We collect non-personal data through web cookies to enhance user experience.

Purpose of Data Collection

The data we collect is used for order processing and to provide our services efficiently.

Data Sharing

We do not share your personal information with any third parties.

Children’s Privacy

TradeLikeBot does not knowingly collect any personal information from children.

Updates to the Privacy Policy

We may update this Privacy Policy from time to time. Users will be notified of any changes via email.

Contact Us

If you have any questions about this Privacy Policy, please contact us at: mail@tradelikebot.com

Conclusion

Thank you for using TradeLikeBot. Your privacy and trust are important to us.`}
        </pre>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
