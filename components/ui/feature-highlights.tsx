import {
  BarChart3,
  FileType,
  Paintbrush2,
  ShieldCheck,
  Layout,
  Infinity,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";

const features = [
  {
    title: "Powerful Analytics",
    description:
      "Track who accesses your documents and how they interact with your content.",
    icon: <BarChart3 className="h-5" />,
  },
  {
    title: "Wide file support",
    description:
      "Support for a wide range of file types including PDFs, images, and more.",
    icon: <FileType className="h-5" />,
  },
  {
    title: "Highly Customizable",
    description:
      "Customize your document sharing experience with a wide range of options including custom domains and putting your own branding.",
    icon: <Paintbrush2 className="h-5" />,
  },
  {
    title: "Multiple access control methods",
    description:
      "Control access to your documents with a wide range of options including email verification, passwords, domain whitelisting, access expiry and watermarking.",
    icon: <ShieldCheck className="h-5" />,
  },
  {
    title: "Modern UX",
    description:
      "A modern, easy to use interface that makes it easy to share documents with others.",
    icon: <Layout className="h-5" />,
  },
  {
    title: "Free Forever plans",
    description:
      "We offer free plans forever with no hidden charges. You can use all the essential features including document tracking and protection features without any cost.",
    icon: <Infinity className="h-5" />,
  },
];

const FeatureHighlights = () => {
  return (
    <section className="py-32">
      <div className="container max-w-5xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge className="mb-6" variant="outline">
            Comprehensive and Powerful
          </Badge>
          <h2 className="text-3xl font-medium">
            Say Hello to Modern Document Sharing
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
