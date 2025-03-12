import { Check } from "lucide-react";

const FeatureZigZag = () => {
  return (
    <section className="py-32">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col space-y-10 md:space-y-16">
          <div className="lg:flex lg:gap-x-4">
            <div className="lg:w-1/2">
              <div className="mb-6 md:mb-8 lg:mb-0">
                <img
                  src="/feature1.png"
                  alt="Ditch Email Attachments"
                  className="aspect-[4/3] w-full rounded-md border border-border object-cover"
                />
              </div>
            </div>
            <div className="lg:flex lg:w-1/2 lg:items-center lg:pl-24 2xl:pl-32">
              <div>
                <h3 className="mb-3 text-xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
                  Ditch the E-Mail Attachments
                </h3>
                <p className="text-muted-foreground lg:text-lg mb-4">
                  Warpindex lets you share important files using a branded link without worrying about file size limits or version control.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5" />
                    <span className="text-muted-foreground">Auto-sync changes so people can access the latest version with the same link</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5" />
                    <span className="text-muted-foreground">Use a custom domain and styling to align with your branding</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5" />
                    <span className="text-muted-foreground">Embed files directly into your website</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex-row-reverse lg:flex lg:gap-x-4">
            <div className="lg:w-1/2">
              <div className="mb-6 md:mb-8 lg:mb-0">
                <img
                  src="/feature2.png"
                  alt="Control Access to Documents"
                  className="aspect-[4/3] w-full rounded-md border border-border object-cover"
                />
              </div>
            </div>
            <div className="lg:flex lg:w-1/2 lg:items-center lg:pr-24 2xl:pr-32">
              <div>
                <h3 className="mb-3 text-xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
                  Control Access to Documents
                </h3>
                <p className="text-muted-foreground lg:text-lg mb-4">
                  You&apos;ll be able to control who can view, download, and edit documents, reducing the risk of unauthorized access.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5" />
                    <span className="text-muted-foreground">Customize passwords, expiration limits, and download access</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5" />
                    <span className="text-muted-foreground">Enable email authentication or take advantage of domain whitelisting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5" />
                    <span className="text-muted-foreground">Lock documents behind forms to collect leads</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="lg:flex lg:gap-x-4">
            <div className="lg:w-1/2">
              <div className="mb-6 md:mb-8 lg:mb-0">
                <img
                  src="/feature3.png"
                  alt="Track User Engagement"
                  className="aspect-[4/3] w-full rounded-md border border-border object-cover"
                />
              </div>
            </div>
            <div className="lg:flex lg:w-1/2 lg:items-center lg:pl-24 2xl:pl-32">
              <div>
                <h3 className="mb-3 text-xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
                  Track User Engagement
                </h3>
                <p className="text-muted-foreground lg:text-lg mb-4">
                  You can also monitor real-time engagement analytics and use these insights to focus your energy on high-value prospects.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5" />
                    <span className="text-muted-foreground">Identify the users viewing your documents</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5" />
                    <span className="text-muted-foreground">Find out which sections get the most engagement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5" />
                    <span className="text-muted-foreground">See how much time they spent on every page</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex-row-reverse lg:flex lg:gap-x-4">
            <div className="lg:w-1/2">
              <div className="mb-6 md:mb-8 lg:mb-0">
                <img
                  src="/feature4.png"
                  alt="eSigning and Data Rooms"
                  className="aspect-[4/3] w-full rounded-md border border-border object-cover"
                />
              </div>
            </div>
            <div className="lg:flex lg:w-1/2 lg:items-center lg:pr-24 2xl:pr-32">
              <div>
                <h3 className="mb-3 text-xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
                  eSigning and Data Rooms
                </h3>
                <p className="text-muted-foreground lg:text-lg mb-4">
                  You can share documents in secure, virtual data rooms for sensitive projects, high-ticket sales, user onboarding, and more.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5" />
                    <span className="text-muted-foreground">Send documents and collect e-signatures with the same platform</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5" />
                    <span className="text-muted-foreground">Manage legally binding documents like contracts, proposals, and NDAs</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { FeatureZigZag };
