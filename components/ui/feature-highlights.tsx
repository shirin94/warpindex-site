import {
  Zap,
  Rocket,
  RefreshCcw,
  XCircle,
  BarChart3,
  ShieldCheck,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";

const features = [
  {
    title: "One-Click Setup",
    description:
      "Just connect your Google search console and you are ready to go.",
    icon: <Zap className="h-5" />,
  },
  {
    title: "Fast Indexing",
    description:
      "WarpIndex will continously crawl your website and push pages to Google search for fastest indexing.",
    icon: <Rocket className="h-5" />,
  },
  {
    title: "Automatic Indexing",
    description:
      "WarpIndex continuously discovers new pages on your website using sitemaps after setup.",
    icon: <RefreshCcw className="h-5" />,
  },
  {
    title: "Index Removal",
    description:
      "You can control which pages should be indexed and which pages shouldn't be in bulk.",
    icon: <XCircle className="h-5" />,
  },
  {
    title: "Deep Analytics",
    description:
      "Get access to analytics and reports to monitor indexing and traffic.",
    icon: <BarChart3 className="h-5" />,
  },
  {
    title: "Safe and Secure",
    description:
      "WarpIndex is verified by Google and accesses over the Google specific protocols for indexing.",
    icon: <ShieldCheck className="h-5" />,
  },
];

const FeatureHighlights = () => {
  return (
    <section className="py-16">
      <div className="container max-w-5xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-medium">
            Full Control over your website's indexing
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, idx) => (
            <div key={idx} className="flex gap-3">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-accent">
                {feature.icon}
              </span>
              <div>
                <h3 className="text-lg font-medium">{feature.title}</h3>
                <p className="leading-7 text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { FeatureHighlights };
