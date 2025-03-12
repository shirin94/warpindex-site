"use client";

import { Check, ChevronRight } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

const plans = [
  {
    title: "Startup",
    description: "Perfect for small websites",
    price: {
      monthly: "$9",
      annually: (
        <span className="flex items-center">
          $7<Badge className="ml-1">-20%</Badge>
        </span>
      ),
    },
    href: "https://app.warpindex.com/signup",
    recommended: false,
    image: "https://shadcnblocks.com/images/block/block-1.svg",
    featureGroups: [
      {
        title: "Usage",
        features: [
          {
            title: "2 websites",
            icon: Check,
          },
          {
            title: "Unlimited URLs",
            icon: Check,
          },
          {
            title: "200 requests/day",
            icon: Check,
          },
          {
            title: "1 user",
            icon: Check,
          },
        ],
      },
      {
        title: "Features",
        features: [
          {
            title: "Sitemap auto-sync (daily)",
            icon: Check,
          },
          {
            title: "Google auto URL Indexing",
            icon: Check,
          },
          {
            title: "Google URL De-Indexing",
            icon: Check,
          },
        ],
      },
    ],
  },
  {
    title: "Growth",
    description: "For growing businesses",
    price: {
      monthly: "$29",
      annually: (
        <span className="flex items-center">
          $21<Badge className="ml-1">-25%</Badge>
        </span>
      ),
    },
    href: "https://app.warpindex.com/signup",
    recommended: true,
    image: "https://shadcnblocks.com/images/block/block-2.svg",
    featureGroups: [
      {
        title: "Usage",
        features: [
          {
            title: "5 websites",
            icon: Check,
          },
          {
            title: "Unlimited URLs",
            icon: Check,
          },
          {
            title: "400 requests/day",
            icon: Check,
          },
          {
            title: "5 users",
            icon: Check,
          },
        ],
      },
      {
        title: "Features",
        features: [
          {
            title: "Sitemap auto-sync (twice a day)",
            icon: Check,
          },
          {
            title: "Google auto URL Indexing",
            icon: Check,
          },
          {
            title: "Google URL De-Indexing",
            icon: Check,
          },
          {
            title: "Priority support",
            icon: Check,
          },
        ],
      },
    ],
  },
  {
    title: "Business",
    description: "For large organizations",
    price: {
      monthly: "$89",
      annually: (
        <span className="flex items-center">
          $69<Badge className="ml-1">-25%</Badge>
        </span>
      ),
    },
    href: "https://app.warpindex.com/signup",
    recommended: false,
    image: "https://shadcnblocks.com/images/block/block-3.svg",
    featureGroups: [
      {
        title: "Usage",
        features: [
          {
            title: "25 websites",
            icon: Check,
          },
          {
            title: "Unlimited URLs",
            icon: Check,
          },
          {
            title: "1000 requests/day",
            icon: Check,
          },
          {
            title: "20 users",
            icon: Check,
          },
        ],
      },
      {
        title: "Features",
        features: [
          {
            title: "Sitemap auto-sync (hourly)",
            icon: Check,
          },
          {
            title: "Google auto URL Indexing",
            icon: Check,
          },
          {
            title: "Google URL De-Indexing",
            icon: Check,
          },
          {
            title: "Priority support",
            icon: Check,
          },
        ],
      },
    ],
  },
  {
    title: "Enterprise",
    description: "For large organizations",
    price: {
      monthly: "Custom",
      annually: "Custom",
    },
    href: "https://app.warpindex.com/signup",
    recommended: false,
    image: "https://shadcnblocks.com/images/block/block-4.svg",
    featureGroups: [
      {
        title: "Limits",
        features: [
          {
            title: "Unlimited users",
            icon: Check,
          },
          {
            title: "Unlimited files",
            icon: Check,
          },
          {
            title: "Unlimited storage",
            icon: Check,
          },
        ],
      },
      {
        title: "Features",
        features: [
          {
            title: "Salesforce connector",
            icon: Check,
          },
          {
            title: "Custom integrations",
            icon: Check,
          },
          {
            title: "Slack/Teams/Zoom support",
            icon: Check,
          },
        ],
      },
    ],
  },
];

const PricingCards = () => {
  const [annualBilling, setAnnualBilling] = useState(true);
  return (
    <section className="py-16">
      <div className="container mb-8 lg:mb-0">
        <div className="flex flex-col gap-y-12 md:gap-y-16">
          <div className="flex flex-col items-center text-center">
            <h1 className="my-6 text-pretty text-3xl font-bold md:text-4xl xl:text-5xl">
              Pricing Plans
            </h1>
            <p className="text-muted-foreground lg:text-xl">
              Simple, flat pricing. Value you can&apos;t beat!
            </p>
          </div>
          <div className="lg:mb-8 flex justify-center">
            <div className="flex h-full flex-col justify-end">
              <div className="flex items-center space-x-2">
                <Switch
                  id="annual-billing"
                  checked={annualBilling}
                  onCheckedChange={setAnnualBilling}
                  defaultChecked={true}
                />
                <Label htmlFor="annual-billing">Annual billing</Label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container flex flex-col gap-6 gap-y-8 xl:grid xl:grid-cols-4">
        {plans.map((plan) => (
          <article
            key={plan.title}
            className={`rounded-xl border ${plan.recommended ? "border-primary" : "border-border lg:mt-7"} overflow-clip`}
          >
            {plan.recommended && (
              <div className="flex h-7 items-center justify-center bg-primary text-center text-xs font-semibold text-primary-foreground">
                Recommended
              </div>
            )}
            <header className="p-4 sm:p-6 xl:pt-12">
              <div className="mb-6 md:flex md:items-center xl:block">
                <div className="mb-1 flex md:flex-1 md:flex-row-reverse md:items-center xl:mb-6 xl:flex-col-reverse xl:items-start xl:gap-y-4">
                  <div className="flex-1 md:ml-6 xl:ml-0">
                    <p className="mb-1 text-xl font-medium sm:text-2xl">
                      {plan.title}
                    </p>
                    <p className="text-xs text-muted-foreground sm:text-sm 2xl:min-h-10">
                      {plan.description}
                    </p>
                  </div>
                </div>
                <div>
                  <h2 className="mb-1 flex items-start text-2xl font-medium md:text-3xl 2xl:text-4xl">
                    {annualBilling ? plan.price.annually : plan.price.monthly}
                  </h2>
                  <p className="text-xs font-medium text-muted-foreground">
                    / monthly
                  </p>
                </div>
              </div>
              <div>
                <Link href={plan.href}>
                <Button
                  variant={plan.recommended ? "default" : "outline"}
                  className="w-full"
                >
                  Get started for free
                </Button>
                </Link>
              </div>
            </header>
            <main className="space-y-6 border-t border-border p-4 sm:p-6 md:grid md:grid-cols-2 md:space-y-0 xl:block xl:space-y-6">
              {plan.featureGroups.map((group) => (
                <div key={group.title}>
                  <h2 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {group.title}
                  </h2>
                  <ul className="space-y-3">
                    {group.features.map((feature) => (
                      <li
                        key={feature.title}
                        className="flex items-center gap-x-2 text-xs font-medium text-muted-foreground"
                      >
                        <feature.icon className="size-4" />
                        {feature.title}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </main>
          </article>
        ))}
      </div>
    </section>
  );
};

export default PricingCards;
