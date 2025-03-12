"use client";

import { Card } from "@/components/ui/card";

const integrations = [
  {
    title: "Zapier",
    description: "Effortlessly automate Warpindex tasks using connected apps.",
    image: "/integrations/zapier.svg",
    tier: "Basic",
    isComingSoon: false
  },
  {
    title: "Make",
    description: "Sync Warpindex with apps using custom workflows.",
    image: "/integrations/make.svg",
    tier: "Basic",
    isComingSoon: false
  },
  {
    title: "Active Pieces",
    description: "Automate Warpindex with open-source workflows for ease.",
    image: "/integrations/active-pieces.svg",
    tier: "Basic",
    isComingSoon: false
  },
  {
    title: "Integrately",
    description: "Quickly integrate Warpindex with pre-built workflows.",
    image: "/integrations/integrately.svg",
    tier: "Basic",
    isComingSoon: false
  },
  {
    title: "IFTTT",
    description: "Automatically trigger Warpindex tasks across apps with seamless integration.",
    image: "/integrations/ifttt.svg",
    tier: "Basic",
    isComingSoon: false
  },
  {
    title: "Zoho Flow",
    description: "Automate Warpindex data with Zoho apps to automate data management.",
    image: "/integrations/zoho-flow.svg",
    tier: "Basic",
    isComingSoon: false
  },
  {
    title: "Slack",
    description: "Receive Warpindex updates delivered directly to Slack.",
    image: "/integrations/slack.svg",
    tier: "Basic",
    isComingSoon: true
  },
  {
    title: "Discord",
    description: "Send Warpindex updates to Discord channels to keep your team updated.",
    image: "/integrations/discord.svg",
    tier: "Basic",
    isComingSoon: true
  },
  {
    title: "Notion",
    description: "Sync Warpindex data to Notion pages to keep information organized.",
    image: "/integrations/notion.svg",
    tier: "Premium",
    isComingSoon: true
  },
  {
    title: "Hubspot",
    description: "Sync Warpindex with HubSpot for CRM tasks to enhance customer management.",
    image: "/integrations/hubspot.svg",
    tier: "Premium",
    isComingSoon: true
  },
  {
    title: "Salesforce",
    description: "Sync Warpindex with Salesforce for automated CRM and lead management.",
    image: "/integrations/salesforce.svg",
    tier: "Add-on",
    isComingSoon: true
  },
  {
    title: "Intercom",
    description: "Automate Warpindex lead capture with Intercom.",
    image: "/integrations/intercom.svg",
    tier: "Premium",
    isComingSoon: true
  },
  {
    title: "Crisp Chat",
    description: "Enable Warpindex with real-time chat via Crisp to provide instant support.",
    image: "/integrations/crisp.svg",
    tier: "Premium",
    isComingSoon: true
  },
  {
    title: "Google Analytics",
    description: "Track Warpindex data in Google Analytics to gain insights into performance.",
    image: "/integrations/google-analytics.svg",
    tier: "Premium",
    isComingSoon: true
  },
  {
    title: "Plausible",
    description: "View Warpindex analytics in Plausible to access privacy-focused performance metrics.",
    image: "/integrations/plausible.svg",
    tier: "Premium",
    isComingSoon: true
  },
  {
    title: "API",
    description: "Integrate Warpindex with any app using its API to customize functionality.",
    image: "/integrations/api.svg",
    tier: "Premium",
    isComingSoon: true
  }
];

const IntegrationCards = () => {
  return (
    <section className="py-16">
      <div className="container">
        <ul className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {integrations.map((integration, index) => (
            <li key={index}>
              <Card className="p-6">
                <img
                  src={integration.image}
                  alt={integration.title}
                  className="w-10"
                />
                <div className="flex items-center gap-2 mt-4">
                  <h3 className="text-lg font-medium">
                    {integration.title}
                  </h3>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <span className={`inline-flex items-center rounded-full px-1.5 py-0.5 text-[10px] font-medium ring-1
                    ${integration.tier === 'Basic'
                      ? 'text-blue-700 ring-blue-700/30'
                      : integration.tier === 'Premium'
                      ? 'text-purple-700 ring-purple-700/30'
                      : 'text-orange-700 ring-orange-700/30'}`}>
                    {integration.tier}
                  </span>
                  {integration.isComingSoon && (
                    <span className="text-[10px] text-muted-foreground">
                      Coming Soon
                    </span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  {integration.description}
                </p>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export { IntegrationCards };
