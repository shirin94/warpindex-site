"use client";

import { Check, ChevronDown, Info, X } from "lucide-react";
import { Fragment, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const plans = [
  {
    title: "Free",
    price: { monthly: "$0", annually: "$0" },
    href: "https://app.warpindex.com/signup",
    recommended: false,
  },
  {
    title: "Startup",
    price: { monthly: "$39", annually: "$29" },
    href: "https://app.warpindex.com/signup",
    recommended: false,
  },
  {
    title: "Business",
    price: { monthly: "$119", annually: "$89" },
    href: "https://app.warpindex.com/signup",
    recommended: true,
  },
  {
    title: "Enterprise",
    price: { monthly: "Custom", annually: "Custom" },
    href: "https://app.warpindex.com/signup",
    recommended: false,
  },
];

const featureMatrix = [
  {
    title: "Limits",
    features: [
      {
        title: "Users",
        info: "Number of team members who can access your account",
        inclusions: [
          { plan: "Free", content: "3 users" },
          { plan: "Startup", content: "10 users" },
          { plan: "Business", content: "100 users" },
          { plan: "Enterprise", content: "Unlimited" },
        ],
      },
      {
        title: "Files",
        info: "Maximum number of files you can store",
        inclusions: [
          { plan: "Free", content: "100 files" },
          { plan: "Startup", content: "1000 files" },
          { plan: "Business", content: "5000 files" },
          { plan: "Enterprise", content: "Unlimited" },
        ],
      },
      {
        title: "Storage",
        info: "Total storage space for your files",
        inclusions: [
          { plan: "Free", content: "2 GB" },
          { plan: "Startup", content: "20 GB" },
          { plan: "Business", content: "200 GB" },
          { plan: "Enterprise", content: "Unlimited" },
        ],
      },
    ],
  },
  {
    title: "Features",
    features: [
      {
        title: "Links, Visits, Data-rooms",
        inclusions: [
          { plan: "Free", content: <Check className="size-4 lg:size-5" /> },
          { plan: "Startup", content: <Check className="size-4 lg:size-5" /> },
          { plan: "Business", content: <Check className="size-4 lg:size-5" /> },
          { plan: "Enterprise", content: <Check className="size-4 lg:size-5" /> },
        ],
      },
      {
        title: "Custom Domain",
        inclusions: [
          { plan: "Free", content: <X className="size-4 text-muted-foreground lg:size-5" /> },
          { plan: "Startup", content: "Subdomain only" },
          { plan: "Business", content: <Check className="size-4 lg:size-5" /> },
          { plan: "Enterprise", content: <Check className="size-4 lg:size-5" /> },
        ],
      },
      {
        title: "Remove Warpindex Badge",
        inclusions: [
          { plan: "Free", content: <X className="size-4 text-muted-foreground lg:size-5" /> },
          { plan: "Startup", content: <Check className="size-4 lg:size-5" /> },
          { plan: "Business", content: <Check className="size-4 lg:size-5" /> },
          { plan: "Enterprise", content: <Check className="size-4 lg:size-5" /> },
        ],
      },
      {
        title: "Custom Styling",
        inclusions: [
          { plan: "Free", content: <X className="size-4 text-muted-foreground lg:size-5" /> },
          { plan: "Startup", content: <X className="size-4 text-muted-foreground lg:size-5" /> },
          { plan: "Business", content: <Check className="size-4 lg:size-5" /> },
          { plan: "Enterprise", content: <Check className="size-4 lg:size-5" /> },
        ],
      },
      {
        title: "Data Room Customizations",
        inclusions: [
          { plan: "Free", content: <X className="size-4 text-muted-foreground lg:size-5" /> },
          { plan: "Startup", content: <X className="size-4 text-muted-foreground lg:size-5" /> },
          { plan: "Business", content: <Check className="size-4 lg:size-5" /> },
          { plan: "Enterprise", content: <Check className="size-4 lg:size-5" /> },
        ],
      },
      {
        title: "Ask AI",
        info: "AI-powered assistance for your data rooms",
        inclusions: [
          { plan: "Free", content: <X className="size-4 text-muted-foreground lg:size-5" /> },
          { plan: "Startup", content: <X className="size-4 text-muted-foreground lg:size-5" /> },
          { plan: "Business", content: "Add-on" },
          { plan: "Enterprise", content: "Add-on" },
        ],
      },
    ],
  },
  {
    title: "Integrations",
    features: [
      {
        title: "Basic Integrations",
        info: "Zapier, Make, Active Pieces, Integrately, IFTTT, Zoho Flow - Check out our <a href='/integrations' className='underline'>integrations page</a>",
        inclusions: [
          { plan: "Free", content: <Check className="size-4 lg:size-5" /> },
          { plan: "Startup", content: <Check className="size-4 lg:size-5" /> },
          { plan: "Business", content: <Check className="size-4 lg:size-5" /> },
          { plan: "Enterprise", content: <Check className="size-4 lg:size-5" /> },
        ],
      },
      {
        title: "Premium Integrations",
        info: "Notion, Hubspot, Intercom, Crisp, Analytics - Check out our <a href='/integrations' className='underline'>integrations page</a>",
        inclusions: [
          { plan: "Free", content: <X className="size-4 text-muted-foreground lg:size-5" /> },
          { plan: "Startup", content: <X className="size-4 text-muted-foreground lg:size-5" /> },
          { plan: "Business", content: <Check className="size-4 lg:size-5" /> },
          { plan: "Enterprise", content: <Check className="size-4 lg:size-5" /> },
        ],
      },
      {
        title: "Salesforce Connector",
        inclusions: [
          { plan: "Free", content: <X className="size-4 text-muted-foreground lg:size-5" /> },
          { plan: "Startup", content: <X className="size-4 text-muted-foreground lg:size-5" /> },
          { plan: "Business", content: "Add-on" },
          { plan: "Enterprise", content: <Check className="size-4 lg:size-5" /> },
        ],
      },
      {
        title: "Custom Integrations",
        info: "Let our team develop custom integrations for you",
        inclusions: [
          { plan: "Free", content: <X className="size-4 text-muted-foreground lg:size-5" /> },
          { plan: "Startup", content: <X className="size-4 text-muted-foreground lg:size-5" /> },
          { plan: "Business", content: <X className="size-4 text-muted-foreground lg:size-5" /> },
          { plan: "Enterprise", content: <Check className="size-4 lg:size-5" /> },
        ],
      },
    ],
  },
  {
    title: "Support",
    features: [
      {
        title: "Email Support",
        inclusions: [
          { plan: "Free", content: <Check className="size-4 lg:size-5" /> },
          { plan: "Startup", content: <Check className="size-4 lg:size-5" /> },
          { plan: "Business", content: <Check className="size-4 lg:size-5" /> },
          { plan: "Enterprise", content: <Check className="size-4 lg:size-5" /> },
        ],
      },
      {
        title: "Live Chat Support",
        inclusions: [
          { plan: "Free", content: <X className="size-4 text-muted-foreground lg:size-5" /> },
          { plan: "Startup", content: <Check className="size-4 lg:size-5" /> },
          { plan: "Business", content: <Check className="size-4 lg:size-5" /> },
          { plan: "Enterprise", content: <Check className="size-4 lg:size-5" /> },
        ],
      },
      {
        title: "Slack/Teams/Zoom Support",
        inclusions: [
          { plan: "Free", content: <X className="size-4 text-muted-foreground lg:size-5" /> },
          { plan: "Startup", content: <X className="size-4 text-muted-foreground lg:size-5" /> },
          { plan: "Business", content: <X className="size-4 text-muted-foreground lg:size-5" /> },
          { plan: "Enterprise", content: <Check className="size-4 lg:size-5" /> },
        ],
      },
    ],
  },
];

const PricingTable = () => {
  const [billing, setBilling] = useState<"monthly" | "annually">("annually");
  return (
    <TooltipProvider delayDuration={150}>
      <section className="py-16" id="pricing-comparison">
        <div className="container">
          <div className="sticky top-16 bg-background">
            <div className="mb-8 hidden pt-8 lg:block">
              <div className="grid items-end gap-6 border-b border-border pb-8 lg:grid-cols-6">
                <div className="col-span-2">
                  <div className="flex h-full flex-col justify-end">
                    <span className="mb-2 text-xs font-medium text-muted-foreground">
                      Billing
                    </span>
                    <Tabs
                      value={billing}
                      onValueChange={setBilling as (value: string) => void}
                    >
                      <TabsList>
                        <TabsTrigger value="monthly">Monthly</TabsTrigger>
                        <TabsTrigger value="annually">Annually</TabsTrigger>
                      </TabsList>
                    </Tabs>
                  </div>
                </div>
                {plans.map((plan) => (
                  <div
                    key={plan.title}
                    className="rounded-lg border border-border p-3 2xl:p-4"
                  >
                    <h3 className="mb-1 text-xl font-medium sm:text-2xl">
                      {plan.title}
                    </h3>
                    <p className="mb-4 text-sm font-medium text-muted-foreground">
                      {plan.price[billing]}
                      <span className="hidden 2xl:inline"> / monthly</span>
                    </p>
                    <Button
                      variant={plan.recommended ? "default" : "outline"}
                      className="w-full"
                      asChild
                    >
                      <a href={plan.href}>
                        <span className="2xl:hidden">Start Free</span>
                        <span className="hidden 2xl:inline">
                          Get started for free
                        </span>
                      </a>
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-8 lg:space-y-14">
            {featureMatrix.map((category) => (
              <div key={category.title}>
                <h3 className="mb-6 text-lg font-medium lg:mb-3">
                  {category.title}
                </h3>
                <div className="space-y-4 lg:space-y-0">
                  {category.features.map((feature) => (
                    <Fragment key={feature.title}>
                      <dl className="hidden grid-cols-6 gap-6 border-b border-border lg:grid">
                        <dt className="col-span-2 justify-between py-4 pb-4">
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <h4 className="group flex min-h-6 items-center gap-x-1 font-medium">
                                {feature.title}{" "}
                                {feature.info && (
                                  <Info className="ml-2 size-4 cursor-pointer text-muted-foreground group-hover:text-accent-foreground" />
                                )}
                              </h4>
                            </TooltipTrigger>
                            {feature.info && (
                              <TooltipContent>{feature.info}</TooltipContent>
                            )}
                          </Tooltip>
                        </dt>
                        {feature.inclusions.map((inclusion) => (
                          <dd
                            key={inclusion.plan}
                            className="hidden py-4 text-sm text-muted-foreground lg:block"
                          >
                            {inclusion.content}
                          </dd>
                        ))}
                      </dl>
                      <Collapsible
                        className="group lg:hidden"
                        defaultOpen={false}
                      >
                        <dl
                          key={feature.title}
                          className="border-b border-border"
                        >
                          <CollapsibleTrigger className="w-full">
                            <dt className="flex items-center justify-between pb-4">
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <h4 className="group flex items-center gap-x-1 text-sm font-medium md:text-base">
                                    {feature.title}
                                    {feature.info && (
                                      <Info className="ml-2 size-4 cursor-pointer text-muted-foreground group-hover:text-accent-foreground" />
                                    )}
                                  </h4>
                                </TooltipTrigger>
                                {feature.info && (
                                  <TooltipContent>
                                    {feature.info}
                                  </TooltipContent>
                                )}
                              </Tooltip>

                              <ChevronDown className='size-5 transition-transform group-data-[state="open"]:rotate-180' />
                            </dt>
                          </CollapsibleTrigger>
                          <CollapsibleContent>
                            {feature.inclusions.map((inclusion) => (
                              <dd
                                key={inclusion.plan}
                                className="flex items-center border-b border-border py-3 text-xs text-muted-foreground last:border-b-0 md:py-3.5"
                              >
                                <div className="w-1/2 md:w-1/4">
                                  {inclusion.plan}
                                </div>
                                {inclusion.content}
                              </dd>
                            ))}
                          </CollapsibleContent>
                        </dl>
                      </Collapsible>
                    </Fragment>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 hidden text-xs text-muted-foreground md:block">
            * Caveats and other conditions
          </p>
        </div>
      </section>
    </TooltipProvider>
  );
};

export default PricingTable;
