"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { FaCheck } from "react-icons/fa";
import {
  SiPaypal,
  SiStripe,
  SiGooglepay,
  SiPhonepe,
  SiPaytm,
  SiRazorpay,
} from "react-icons/si";
import { GiMoneyStack } from "react-icons/gi";

type ServiceKey =
  | "web"
  | "marketing"
  | "app"
  | "consultancy"
  | "content"
  | "ai";
type Currency = "INR" | "USD";

interface Plan {
  name: string;
  priceINR: string;
  priceUSD: string;
  suffix?: string;
  features: string[];
  cta: string;
  tagline: string;
  highlight?: boolean;
}

interface ServicePricing {
  label: string;
  plans: [Plan, Plan, Plan];
}

const pricingData: Record<ServiceKey, ServicePricing> = {
  web: {
    label: "Web Development",
    plans: [
      {
        name: "Starter",
        priceINR: "₹9,999",
        priceUSD: "$107",
        features: [
          "3–5 Pages Website",
          "Mobile Responsive Design",
          "Basic UI/UX Layout",
          "Contact Form Integration",
          "Basic SEO Setup",
          "1 Revision Included",
          "Delivery in 5–7 Days",
        ],
        cta: "Get Started",
        tagline: "Best for small businesses",
      },
      {
        name: "Business",
        priceINR: "₹24,999",
        priceUSD: "$269",
        features: [
          "8–12 Pages Website",
          "Custom UI/UX Design",
          "Fully Mobile Optimized",
          "Speed Optimization",
          "On-Page SEO Setup",
          "WhatsApp / Chat Integration",
          "Blog Setup",
          "3 Revisions Included",
          "Delivery in 10–14 Days",
        ],
        cta: "Get Started",
        tagline: "Ideal for growing businesses",
        highlight: true,
      },
      {
        name: "Premium",
        priceINR: "₹49,999",
        priceUSD: "$539",
        suffix: "+",
        features: [
          "Fully Custom Website",
          "Unlimited Pages",
          "Advanced UI/UX Design",
          "Full SEO Optimization",
          "Performance Optimization",
          "API & Third-party Integrations",
          "E-commerce / Booking System (Optional)",
          "Priority Support",
          "Unlimited Revisions",
          "Dedicated Project Manager",
        ],
        cta: "Request Quote",
        tagline: "For advanced & custom solutions",
      },
    ],
  },
  marketing: {
    label: "Digital Marketing",
    plans: [
      {
        name: "Starter",
        priceINR: "₹4,999",
        priceUSD: "$53",
        suffix: "/month",
        features: [
          "Social Media Management (2 Platforms)",
          "8–10 Posts / Month",
          "Basic Content Creation",
          "Hashtag Research",
          "Basic SEO Setup",
          "Monthly Performance Report",
          "1 Revision Included",
        ],
        cta: "Get Started",
        tagline: "Perfect for small businesses starting online",
      },
      {
        name: "Business",
        priceINR: "₹12,000",
        priceUSD: "$129",
        suffix: "/month",
        features: [
          "Social Media Management (3–4 Platforms)",
          "15–20 Posts / Month",
          "Creative Design + Content Writing",
          "Advanced Hashtag Strategy",
          "On-Page SEO Optimization",
          "Competitor Analysis",
          "Google My Business Optimization",
          "Monthly Analytics Report",
          "3 Revisions Included",
        ],
        cta: "Get Started",
        tagline: "Ideal for growing brands & consistent growth",
        highlight: true,
      },
      {
        name: "Premium",
        priceINR: "₹25,000",
        priceUSD: "$269",
        suffix: "/month",
        features: [
          "Full Social Media Management (All Platforms)",
          "25–30 Posts / Month",
          "Advanced Content Strategy",
          "Paid Ads Management (Meta / Google Ads)",
          "Complete SEO (On-page + Technical Basics)",
          "Landing Page Suggestions",
          "Weekly Performance Reports",
          "Priority Support",
          "Unlimited Revisions",
        ],
        cta: "Request Quote",
        tagline: "Best for scaling businesses & aggressive growth",
      },
    ],
  },
  app: {
    label: "Mobile App Development",
    plans: [
      {
        name: "Starter",
        priceINR: "₹24,999",
        priceUSD: "$269",
        features: [
          "Basic Mobile App (Android or iOS)",
          "3–5 Screens",
          "Simple UI Design",
          "Basic Navigation",
          "Contact / Form Integration",
          "Basic Testing",
          "1 Revision Included",
          "Delivery in 10–15 Days",
        ],
        cta: "Get Started",
        tagline: "Perfect for simple apps & MVP launch",
      },
      {
        name: "Business",
        priceINR: "₹60,000",
        priceUSD: "$646",
        features: [
          "Android + iOS App (Cross-platform)",
          "6–12 Screens",
          "Custom UI/UX Design",
          "API Integration (Basic)",
          "User Login / Signup",
          "Database Integration",
          "Push Notifications",
          "Performance Optimization",
          "3 Revisions Included",
          "Delivery in 20–30 Days",
        ],
        cta: "Get Started",
        tagline: "Ideal for startups & growing businesses",
        highlight: true,
      },
      {
        name: "Premium",
        priceINR: "₹1,20,000",
        priceUSD: "$1,294",
        suffix: "+",
        features: [
          "Fully Custom Mobile Application",
          "Unlimited Screens",
          "Advanced UI/UX Design",
          "Complex API Integrations",
          "Admin Panel / Dashboard",
          "Payment Gateway Integration",
          "Real-time Features (Chat, Notifications)",
          "High Performance Optimization",
          "App Store & Play Store Deployment",
          "Priority Support",
          "Unlimited Revisions",
        ],
        cta: "Request Quote",
        tagline: "Best for advanced apps & scalable solutions",
      },
    ],
  },
  consultancy: {
    label: "Business Consultancy",
    plans: [
      {
        name: "Starter",
        priceINR: "₹2,999",
        priceUSD: "$32",
        suffix: "/session",
        features: [
          "1-on-1 Consultation (60 Minutes)",
          "Business Strategy Discussion",
          "Basic Problem Analysis",
          "Actionable Suggestions",
          "Q&A Session",
          "1 Follow-up (Chat/Email)",
        ],
        cta: "Book Session",
        tagline: "Perfect for quick guidance & problem-solving",
      },
      {
        name: "Business",
        priceINR: "₹9,999",
        priceUSD: "$107",
        suffix: "/month",
        features: [
          "4 Strategy Sessions / Month",
          "Business Growth Planning",
          "Marketing & Sales Guidance",
          "Basic Competitor Analysis",
          "Workflow Optimization Tips",
          "Email / Chat Support",
          "Monthly Progress Review",
        ],
        cta: "Get Started",
        tagline: "Ideal for growing businesses needing regular guidance",
        highlight: true,
      },
      {
        name: "Premium",
        priceINR: "₹25,000",
        priceUSD: "$269",
        suffix: "+/month",
        features: [
          "Dedicated Business Consultant",
          "Weekly Strategy Calls",
          "Advanced Business Planning",
          "Detailed Competitor Research",
          "Sales Funnel Optimization",
          "Branding & Positioning Guidance",
          "Priority Support (Call/Chat)",
          "Custom Growth Strategy",
          "Ongoing Performance Tracking",
        ],
        cta: "Request Quote",
        tagline: "Best for scaling businesses & long-term strategy",
      },
    ],
  },
  content: {
    label: "Content Writing",
    plans: [
      {
        name: "Starter",
        priceINR: "₹999",
        priceUSD: "$10",
        suffix: "/article",
        features: [
          "500–800 Words Content",
          "Basic Research",
          "Simple & Clear Writing",
          "SEO-Friendly Formatting",
          "1 Revision Included",
          "Delivery in 2–3 Days",
        ],
        cta: "Get Started",
        tagline: "Perfect for basic content needs",
      },
      {
        name: "Business",
        priceINR: "₹2,499",
        priceUSD: "$24",
        suffix: "/article",
        features: [
          "1000–1500 Words Content",
          "In-depth Research",
          "SEO Optimization (On-page)",
          "Keyword Integration",
          "Engaging & Structured Writing",
          "Internal Linking Suggestions",
          "2–3 Revisions Included",
          "Delivery in 3–5 Days",
        ],
        cta: "Get Started",
        tagline: "Ideal for blogs, websites & SEO content",
        highlight: true,
      },
      {
        name: "Premium",
        priceINR: "₹4,999",
        priceUSD: "$53",
        suffix: "+/article",
        features: [
          "1500–2500+ Words Content",
          "Advanced Research & Competitor Analysis",
          "High-Level SEO Optimization",
          "Conversion-Focused Copywriting",
          "Content Strategy Support",
          "External Linking Suggestions",
          "Plagiarism-Free Guarantee",
          "Unlimited Revisions",
          "Priority Delivery",
        ],
        cta: "Request Quote",
        tagline: "Best for high-quality, conversion-focused content",
      },
    ],
  },
  ai: {
    label: "AI & Machine Learning",
    plans: [
      {
        name: "Starter",
        priceINR: "₹14,999",
        priceUSD: "$161",
        features: [
          "Basic AI Integration (Chatbot / Automation)",
          "Pre-built AI Tools Setup",
          "Simple Workflow Automation",
          "Basic Data Handling",
          "1 Use Case Implementation",
          "1 Revision Included",
          "Delivery in 7–10 Days",
        ],
        cta: "Get Started",
        tagline: "Perfect for basic automation & AI integration",
      },
      {
        name: "Business",
        priceINR: "₹39,999",
        priceUSD: "$430",
        features: [
          "Custom AI Workflow Development",
          "Chatbot / AI Assistant Setup",
          "API Integration (OpenAI / Tools)",
          "Data Processing & Automation",
          "Basic Machine Learning Models",
          "Dashboard / Reporting Setup",
          "3 Revisions Included",
          "Delivery in 15–25 Days",
        ],
        cta: "Get Started",
        tagline: "Ideal for businesses looking to automate & optimize",
        highlight: true,
      },
      {
        name: "Premium",
        priceINR: "₹99,999",
        priceUSD: "$1,076",
        suffix: "+",
        features: [
          "Fully Custom AI Solution",
          "Advanced Machine Learning Models",
          "Large Data Processing & Analysis",
          "AI-Powered Automation Systems",
          "Custom API & System Integrations",
          "Real-time AI Features",
          "Dedicated AI Strategy",
          "Priority Support",
          "Unlimited Revisions",
          "Ongoing Optimization",
        ],
        cta: "Request Quote",
        tagline: "Best for advanced AI solutions & scalable systems",
      },
    ],
  },
};

interface Stat {
  value?: number;
  suffix?: string;
  label: string;
  sublabel?: string;
}

const statsData: Record<ServiceKey, Stat[]> = {
  web: [
    { label: "Web Development" },
    { value: 50, suffix: "+", label: "Projects Completed" },
    { value: 100, suffix: "%", label: "Client Satisfaction" },
    { label: "Free Initial", sublabel: "Consultation" },
  ],
  marketing: [
    { label: "Digital Marketing" },
    { value: 30, suffix: "+", label: "Campaigns Managed" },
    { value: 100, suffix: "%", label: "Client Satisfaction" },
    { label: "Free Initial", sublabel: "Consultation" },
  ],
  app: [
    { label: "Mobile App Development" },
    { value: 20, suffix: "+", label: "Apps Developed" },
    { value: 100, suffix: "%", label: "Client Satisfaction" },
    { label: "Free Initial", sublabel: "Consultation" },
  ],
  consultancy: [
    { label: "Business Consultancy" },
    { value: 50, suffix: "+", label: "Business Strategies Delivered" },
    { value: 100, suffix: "%", label: "Client Satisfaction" },
    { label: "Free Initial", sublabel: "Consultation" },
  ],
  content: [
    { label: "Content Writing" },
    { value: 200, suffix: "+", label: "Articles Delivered" },
    { value: 100, suffix: "%", label: "Client Satisfaction" },
    { label: "Free Initial", sublabel: "Consultation" },
  ],
  ai: [
    { label: "AI & Machine Learning" },
    { value: 25, suffix: "+", label: "AI Solutions Delivered" },
    { value: 100, suffix: "%", label: "Client Satisfaction" },
    { label: "Free Initial", sublabel: "Consultation" },
  ],
};

const serviceKeys: ServiceKey[] = [
  "web",
  "marketing",
  "app",
  "consultancy",
  "content",
  "ai",
];

const tabLabels: Record<ServiceKey, string> = {
  web: "Web Dev",
  marketing: "Marketing",
  app: "App Dev",
  consultancy: "Consultancy",
  content: "Content",
  ai: "AI & ML",
};

function CountUp({
  target,
  suffix = "",
  duration = 1400,
}: {
  target: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) {
      setCount(0);
      return;
    }
    let startTime: number | null = null;
    let raf: number;
    const animate = (ts: number) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) raf = requestAnimationFrame(animate);
      else setCount(target);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [isInView, target, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

function PricingCard({
  plan,
  currency,
  index,
}: {
  plan: Plan;
  currency: Currency;
  index: number;
}) {
  const price = currency === "INR" ? plan.priceINR : plan.priceUSD;
  const suffix = plan.suffix ?? "";

  return (
    <motion.div
      key={plan.name}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className={cn(
        "relative flex flex-col rounded-2xl overflow-hidden",
        plan.highlight
          ? "bg-gradient-to-b from-[#3d4eff] to-[#0b2289] shadow-2xl shadow-blue-900/40 z-10 border border-blue-400/30"
          : "bg-gradient-to-b from-[#1e3a8a] to-[#172554] shadow-xl",
      )}
    >
      {/* Badge */}
      <div className="px-6 pt-6 pb-2">
        <span
          className={cn(
            "inline-block text-xs font-semibold px-3 py-1 rounded-full",
            plan.highlight
              ? "bg-white/20 text-white"
              : "bg-white/10 text-blue-200",
          )}
        >
          {plan.name}
        </span>
      </div>

      {/* Price */}
      <div className="px-6 pb-4">
        <div className="bg-[#020617] rounded-xl px-4 py-3 inline-flex items-baseline gap-1">
          <span className="text-white text-3xl font-bold tracking-tight">
            {price}
          </span>
          {suffix && (
            <span className="text-blue-300 text-sm font-medium">{suffix}</span>
          )}
        </div>
      </div>

      {/* Features */}
      <div className="px-6 pb-4 flex-1 space-y-2">
        {plan.features.map((feature) => (
          <div key={feature} className="flex items-start gap-2">
            <FaCheck className="text-blue-300 mt-0.5 shrink-0 text-xs" />
            <span className="text-blue-100 text-sm leading-snug">
              {feature}
            </span>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="px-6 pt-2 pb-4">
        <Link
          href="/#contact"
          className={cn(
            "block w-full text-center py-3 rounded-xl font-semibold text-sm transition-all duration-200",
            plan.highlight
              ? "bg-[#020617] text-white hover:bg-[#0a1a4d]"
              : "bg-[#020617]/80 text-white hover:bg-[#020617]",
          )}
        >
          {plan.cta}
        </Link>
      </div>

      {/* Tagline */}
      <div className="px-6 pb-5 text-center">
        <p className="text-blue-300/80 text-xs italic">{plan.tagline}</p>
      </div>
    </motion.div>
  );
}

export default function PricingPage() {
  const [activeService, setActiveService] = useState<ServiceKey>("web");
  const [currency, setCurrency] = useState<Currency>("INR");

  const currentService = pricingData[activeService];

  // Set active service based on URL hash on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash.slice(1); // Remove the # character
      if (hash && serviceKeys.includes(hash as ServiceKey)) {
        setActiveService(hash as ServiceKey);
      }
    }
  }, []);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Banner */}
      <section
        className="relative w-full py-24 flex flex-col items-center justify-center text-center overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #7a99b8 0%, #8aaac5 25%, #6b8fad 50%, #7a99b8 75%, #8aaac5 100%)",
        }}
      >
        {/* Diagonal stripe overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, rgba(255,255,255,0.15) 0px, rgba(255,255,255,0.15) 1px, transparent 1px, transparent 40px)",
          }}
        />
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white tracking-wide drop-shadow">
            Pricing
          </h1>
          <p className="mt-3 text-white/80 text-base md:text-lg font-medium">
            Choose the Perfect Plan for Your Business
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-950">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-2 text-gray-500 text-sm md:text-base max-w-xl mx-auto">
            Choose a plan that fits your needs. Upgrade anytime as your business
            grows.
          </p>
        </div>

        {/* Service Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {serviceKeys.map((key) => (
            <button
              key={key}
              onClick={() => setActiveService(key)}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 border",
                activeService === key
                  ? "bg-[#3d4eff] text-white border-[#3d4eff] shadow-md"
                  : "bg-white text-[#3d4eff] border-[#3d4eff]/40 hover:border-[#3d4eff] hover:bg-[#eef1ff]",
              )}
            >
              {tabLabels[key]}
            </button>
          ))}
        </div>

        {/* Currency Toggle */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <span
            className={cn(
              "text-sm font-semibold transition-colors",
              currency === "INR" ? "text-primary-950" : "text-gray-400",
            )}
          >
            INR (₹)
          </span>
          <button
            onClick={() => setCurrency((c) => (c === "INR" ? "USD" : "INR"))}
            className={cn(
              "relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 focus:outline-none",
              currency === "USD" ? "bg-[#3d4eff]" : "bg-gray-300",
            )}
            aria-label="Toggle currency"
          >
            <span
              className={cn(
                "inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform duration-300",
                currency === "USD" ? "translate-x-6" : "translate-x-1",
              )}
            />
          </button>
          <span
            className={cn(
              "text-sm font-semibold transition-colors",
              currency === "USD" ? "text-primary-950" : "text-gray-400",
            )}
          >
            USD ($)
          </span>
        </div>

        {/* Pricing Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeService}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mb-6 text-center">
              <span className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                {currentService.label}
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              {currentService.plans.map((plan, i) => (
                <PricingCard
                  key={plan.name}
                  plan={plan}
                  currency={currency}
                  index={i}
                />
              ))}
            </div>
          </motion.div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <p className="text-lg md:text-xl font-semibold text-primary-950">
              Not sure which plan is right for you?
            </p>
            <Link
              href="/#contact"
              className="mt-4 inline-block bg-secondary text-white px-8 py-3 rounded-full text-sm font-semibold hover:bg-secondary-600 transition-colors duration-200 shadow-md"
            >
              Get a Free Initial Consultation
            </Link>
          </div>
        </AnimatePresence>

        {/* Some Numbers */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`stats-${activeService}`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
            className="mt-16 rounded-2xl overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, #c8d8e8 0%, #d4e2ee 40%, #bccfdf 70%, #c8d8e8 100%)",
            }}
          >
            <div className="py-10 px-6 md:px-12">
              <p className="text-center text-xs font-semibold tracking-[0.25em] uppercase text-[#3d5a7a] mb-2">
                Some Numbers
              </p>
              <div className="mx-auto w-16 h-[2px] bg-[#7a99b8] mb-8" />
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {statsData[activeService].map((stat, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center text-center"
                  >
                    {stat.value !== undefined ? (
                      <span className="text-4xl md:text-5xl font-bold text-[#1e3a5f] leading-none">
                        <CountUp
                          target={stat.value}
                          suffix={stat.suffix ?? ""}
                        />
                      </span>
                    ) : (
                      <span className="text-2xl md:text-3xl font-bold text-[#1e3a5f] leading-snug">
                        {stat.label}
                        {stat.sublabel && (
                          <>
                            <br />
                            <span className="text-xl md:text-2xl">
                              {stat.sublabel}
                            </span>
                          </>
                        )}
                      </span>
                    )}
                    {stat.value !== undefined && (
                      <p className="mt-2 text-xs md:text-sm text-[#3d5a7a] font-medium leading-snug">
                        {stat.label}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* We Accept */}
        <section className="mt-16 py-10 px-6 md:px-12 rounded-2xl bg-gray-50 border border-gray-200">
          <div className="text-center mb-8">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-gray-500 mb-3">
              We Accept
            </p>
            <div className="mx-auto w-12 h-[2px] bg-secondary" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            {/* PayPal */}
            <motion.div
              whileHover={{ scale: 1.08 }}
              className="flex flex-col items-center gap-2"
            >
              <SiPaypal className="text-[#003087] text-5xl md:text-6xl" />
              <span className="text-xs font-semibold text-gray-600">
                PayPal
              </span>
            </motion.div>

            {/* Stripe */}
            <motion.div
              whileHover={{ scale: 1.08 }}
              className="flex flex-col items-center gap-2"
            >
              <SiStripe className="text-[#5469d4] text-5xl md:text-6xl" />
              <span className="text-xs font-semibold text-gray-600">
                Stripe
              </span>
            </motion.div>

            {/* Wire Transfer */}
            <motion.div
              whileHover={{ scale: 1.08 }}
              className="flex flex-col items-center gap-2"
            >
              <GiMoneyStack className="text-[#1e3a5f] text-5xl md:text-6xl" />
              <span className="text-xs font-semibold text-gray-600 text-center">
                Wire
                <br />
                Transfer
              </span>
            </motion.div>

            {/* Digital Wallets */}
            <motion.div
              whileHover={{ scale: 1.08 }}
              className="flex flex-col items-center gap-3"
            >
              <div className="flex gap-2 items-center">
                <SiRazorpay className="text-[#00A4EF] text-4xl md:text-5xl" />
              </div>
              <span className="text-xs font-semibold text-gray-600 text-center whitespace-nowrap">
                Razorpay
              </span>
            </motion.div>
          </div>
        </section>
      </section>
    </main>
  );
}
