"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, Sparkles, Zap, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const tiers = [
  {
    name: "Free",
    id: "tier-free",
    href: "/register",
    priceMonthly: "$0",
    priceYearly: "$0",
    description: "Perfect for exploring the platform and testing a single resume.",
    icon: Zap,
    iconBg: "bg-color-mint",
    iconColor: "text-emerald-600",
    features: [
      "1 Resume Analysis",
      "Basic ATS Score",
      "Keyword Matching",
      "PDF Export",
    ],
    mostPopular: false,
  },
  {
    name: "Pro",
    id: "tier-pro",
    href: "/register",
    priceMonthly: "$15",
    priceYearly: "$144",
    description: "Ideal for active job seekers needing full optimization.",
    icon: Sparkles,
    iconBg: "bg-color-lavender",
    iconColor: "text-violet-600",
    features: [
      "Unlimited Resume Analyses",
      "Advanced ATS Scoring",
      "AI Rewrite Suggestions",
      "Cover Letter Generator",
      "Priority Support",
    ],
    mostPopular: true,
  },
  {
    name: "Premium",
    id: "tier-premium",
    href: "/register",
    priceMonthly: "$29",
    priceYearly: "$288",
    description: "For ambitious professionals aiming for top-tier roles.",
    icon: Crown,
    iconBg: "bg-color-cream",
    iconColor: "text-orange-600",
    features: [
      "Everything in Pro",
      "LinkedIn Profile Review",
      "Interview Prep Q&A",
      "1-on-1 Expert Review (Monthly)",
      "Custom Design Templates",
    ],
    mostPopular: false,
  },
];

export default function PricingPage() {
  const [annual, setAnnual] = useState(false);

  return (
    <div className="py-28 sm:py-36 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">Pricing that scales with your career</h1>
          <p className="text-lg leading-8 text-muted-foreground">
            Choose the right plan to accelerate your job search. No hidden fees. Cancel anytime.
          </p>
        </motion.div>

        {/* Toggle */}
        <div className="mt-16 flex justify-center">
          <div className="relative flex rounded-full p-1 glass border-white/60">
            <button
              type="button"
              className={`${
                !annual ? "bg-primary text-primary-foreground shadow-md" : "text-muted-foreground hover:text-foreground"
              } relative w-32 rounded-full py-2.5 text-sm font-semibold transition-all duration-300`}
              onClick={() => setAnnual(false)}
            >
              Monthly
            </button>
            <button
              type="button"
              className={`${
                annual ? "bg-primary text-primary-foreground shadow-md" : "text-muted-foreground hover:text-foreground"
              } relative w-32 rounded-full py-2.5 text-sm font-semibold transition-all duration-300`}
              onClick={() => setAnnual(true)}
            >
              Annually
            </button>
            <span className="absolute -top-3 right-0 text-[10px] bg-emerald-500 text-white px-2.5 py-0.5 rounded-full font-medium shadow-sm">
              Save 20%
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-6 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {tiers.map((tier, tierIdx) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: tierIdx * 0.12, duration: 0.5 }}
            >
              <Card
                className={`glass p-8 xl:p-10 h-full flex flex-col relative transition-all duration-500 hover:shadow-xl hover:shadow-black/5 hover:scale-[1.02] rounded-3xl ${
                  tier.mostPopular 
                    ? "border-primary/30 ring-2 ring-primary/20 scale-[1.03] shadow-xl shadow-primary/10 z-10" 
                    : "border-white/60"
                }`}
              >
                {tier.mostPopular && (
                  <div className="absolute top-0 right-6 -translate-y-1/2">
                    <span className="inline-block rounded-full bg-primary px-4 py-1.5 text-xs font-semibold text-primary-foreground shadow-md">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2.5 rounded-xl ${tier.iconBg} shadow-sm`}>
                      <tier.icon className={`w-5 h-5 ${tier.iconColor}`} />
                    </div>
                    <h3 className="text-xl font-bold">{tier.name}</h3>
                  </div>
                  <p className="text-sm leading-6 text-muted-foreground">{tier.description}</p>
                </div>
                <div className="mt-2 mb-8 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight">
                    {annual ? tier.priceYearly : tier.priceMonthly}
                  </span>
                  <span className="text-sm font-medium text-muted-foreground">
                    {annual ? "/year" : "/month"}
                  </span>
                </div>
                <Button 
                  asChild
                  variant={tier.mostPopular ? "default" : "outline"} 
                  className={`w-full rounded-full h-12 mb-8 transition-all duration-300 ${
                    tier.mostPopular 
                      ? "shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:scale-105" 
                      : "glass hover:bg-white/80"
                  }`}
                >
                  <Link href={tier.href}>Get started</Link>
                </Button>
                <ul role="list" className="space-y-4 text-sm text-muted-foreground flex-1">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3 items-center">
                      <div className="p-1 rounded-full bg-color-mint/50">
                        <Check className="h-3.5 w-3.5 text-emerald-600" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
