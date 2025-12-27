import { FC } from "react";
import Link from "next/link";

export const metadata = {
  title: "Frontend Mastery - The web framework for when it matters",
  description:
    "Peerless performance, efficiency and developer experience. Frontend Mastery is trusted by some of the biggest names of the web.",
};

const ShowcaseCard: FC<{
  title?: string;
  description: string;
  href?: string;
  logo?: string;
  logoColor?: string;
}> = ({ title, description, href, logo, logoColor = "text-gray-900" }) => {
  const content = (
    <div className="group relative bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:shadow-gray-200/50 dark:hover:shadow-gray-900/50 hover:-translate-y-1">
      <div className="flex flex-col h-full">
        {/* Mock browser window */}
        <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 mb-6 h-32 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-3 h-3 bg-red-400 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
          </div>
          <div className="space-y-2">
            <div className="h-2 bg-gray-300 dark:bg-gray-700 rounded w-3/4"></div>
            <div className="h-2 bg-gray-300 dark:bg-gray-700 rounded w-1/2"></div>
            <div className="h-2 bg-gray-300 dark:bg-gray-700 rounded w-2/3"></div>
          </div>
        </div>

        <div className="flex-1">
          {logo && (
            <div className={`text-2xl font-bold mb-4 ${logoColor}`}>{logo}</div>
          )}
          <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );

  return href ? (
    <Link href={href} className="block">
      {content}
    </Link>
  ) : (
    content
  );
};

const HomePage: FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto px-6 pt-20 pb-32">
        {/* Hero Section */}
        <div className="text-center mb-24">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-8 tracking-tight leading-none">
            Build. Understand. Master modern frontend development.
          </h1>
          <div className="max-w-2xl mx-auto mb-12">
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-4 font-medium">
              High-quality documentation and learning guides focused on
              JavaScript, React, Next.js, performance, and frontend
              architecture.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/docs"
              className="bg-black dark:bg-white text-white dark:text-black font-medium py-3 px-8 rounded-lg transition-all hover:bg-gray-800 dark:hover:bg-gray-200"
            >
              Learn About Frontend Mastery
            </Link>
          </div>
        </div>

        {/* Showcase Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ShowcaseCard
            logo="Javascript"
            description="A full-featured, hackable Next.js AI chatbot built by Vercel"
            href="/javascript"
          />
          <ShowcaseCard
            description="Architecting a live look at reliability: Stripe's vital Black Friday site"
            href="/react"
            logo="React"
            logoColor="text-purple-600"
          />
          <ShowcaseCard
            description="Developing at the speed of sound: How Sonos amplified their DevEx"
            href="/testing"
            logo="Testing"
            logoColor="text-gray-900"
          />
          <ShowcaseCard
            logo="Performance"
            description="Starter kit for high-performance commerce with Shopify"
            href="/performance"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
