import { Check } from "lucide-react";

const FeatureZigZag = () => {
  return (
    <section className="py-8">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col space-y-10 md:space-y-16">
          <div className="lg:flex lg:gap-x-4">
            <div className="lg:w-1/2">
              <div className="mb-6 md:mb-8 lg:mb-0">
                <img
                  src="/feature1.avif"
                  alt="Setup with Ease"
                  className="w-full rounded-md border border-border object-contain"
                />
              </div>
            </div>
            <div className="lg:flex lg:w-1/2 lg:items-center lg:pl-24 2xl:pl-32">
              <div>
                <h3 className="mb-3 text-xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
                  Setup with Ease
                </h3>
                <p className="text-muted-foreground lg:text-lg mb-4">
                Just connect with Google Search Console and let WarpIndex handle the daily indexing of thousands of pages automatically.
                </p>
              </div>
            </div>
          </div>
          <div className="flex-row-reverse lg:flex lg:gap-x-4">
            <div className="lg:w-1/2">
              <div className="mb-6 md:mb-8 lg:mb-0">
                <img
                  src="/feature2.avif"
                  alt="Sit back and let WarpIndex do it's magic"
                  className="w-full rounded-md border border-border object-contain"
                />
              </div>
            </div>
            <div className="lg:flex lg:w-1/2 lg:items-center lg:pr-24 2xl:pr-32">
              <div>
                <h3 className="mb-3 text-xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
                  Sit back and let WarpIndex do it's magic
                </h3>
                <p className="text-muted-foreground lg:text-lg mb-4">
                  WarpIndex continuously scans your sitemaps for updates and repeatedly pushes your new and updated pages to the search index to get indexed fast
                </p>
              </div>
            </div>
          </div>
          <div className="lg:flex lg:gap-x-4">
            <div className="lg:w-1/2">
              <div className="mb-6 md:mb-8 lg:mb-0">
                <img
                  src="/feature3.avif"
                  alt="Monitor Indexing Progress"
                  className="w-full rounded-md border border-border object-contain"
                />
              </div>
            </div>
            <div className="lg:flex lg:w-1/2 lg:items-center lg:pl-24 2xl:pl-32">
              <div>
                <h3 className="mb-3 text-xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
                  Monitor Indexing Progress
                </h3>
                <p className="text-muted-foreground lg:text-lg mb-4">
                  Get status of indexing for each page and reasons for errors
                </p>
              </div>
            </div>
          </div>
          <div className="flex-row-reverse lg:flex lg:gap-x-4">
            <div className="lg:w-1/2">
              <div className="mb-6 md:mb-8 lg:mb-0">
                <img
                  src="/feature4.avif"
                  alt="Notifications to help you address Issues"
                  className="w-full rounded-md border border-border object-contain"
                />
              </div>
            </div>
            <div className="lg:flex lg:w-1/2 lg:items-center lg:pr-24 2xl:pr-32">
              <div>
                <h3 className="mb-3 text-xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
                  Notifications to help you address Issues
                </h3>
                <p className="text-muted-foreground lg:text-lg mb-4">
                  Get notified about any indexing issues with insights on how to fix them
                </p>
              </div>
            </div>
          </div>
          <div className="lg:flex lg:gap-x-4">
            <div className="lg:w-1/2">
              <div className="mb-6 md:mb-8 lg:mb-0">
                <img
                  src="/feature5.avif"
                  alt="Handle multiple sites with thousands of pages"
                  className="w-full rounded-md border border-border object-contain"
                />
              </div>
            </div>
            <div className="lg:flex lg:w-1/2 lg:items-center lg:pl-24 2xl:pl-32">
              <div>
                <h3 className="mb-3 text-xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
                  Handle multiple sites with thousands of pages
                </h3>
                <p className="text-muted-foreground lg:text-lg mb-4">
                  WarpIndex is built for scale so you can manage indexing of multiple websites with hundreds of thousands of pages.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { FeatureZigZag };
