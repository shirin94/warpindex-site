const featuredAddons = [
  {
    id: "additional-custom-domains",
    title: "Additional Custom Domains",
    description: "Add additional custom domains to your Warpindex",
    price: "$49/month",
  },
  {
    id: "sso",
    title: "SSO",
    description: "Single Sign-On for your Warpindex",
    price: "$49/month",
  },
  {
    id: "ask-ai",
    title: "✨ Ask AI",
    description: "Let your users ask AI anything about your documents",
    price: "$5/1000 messages",
  },
];

const PricingAddons = () => {
  return (
    <section className="py-16">
      <div className="container">
        <div className="rounded-xl border border-border py-6 md:py-8 lg:pb-12 lg:pt-16">
          <div className="px-6 md:px-8 lg:px-12">
            <div className="mb-8 md:mb-10 md:flex md:justify-between lg:mb-9">
              <div className="lg:w-2/3">
                <h1 className="mb-4 text-2xl font-medium md:text-3xl lg:text-4xl">
                  Additional add-ons
                </h1>
                <p className="text-xs text-muted-foreground md:text-sm lg:text-base">
                  Add features to your plan to customize it to your needs.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-x-8 gap-y-3 xl:flex-row">
              {featuredAddons.map((addon) => (
                <div
                  key={addon.id}
                  className="flex flex-1 flex-col rounded-lg bg-accent p-6 lg:py-8"
                >
                  <h2 className="mb-1.5 text-base font-medium lg:mb-2 lg:text-lg">
                    {addon.title}
                  </h2>
                  <div className="grid flex-1 grid-cols-1 gap-x-10 md:grid-cols-3 lg:grid-cols-1">
                    <p className="mb-8 max-w-xs text-xs text-muted-foreground md:col-span-2 md:mb-0 lg:mb-10 lg:text-base">
                      {addon.description}
                    </p>
                    <div className="col-span-1 md:ml-auto md:mt-auto lg:ml-0">
                      <p>
                        <span className="font-medium lg:text-2xl">
                          {addon.price}
                        </span>
                        <span className="text-xs font-medium text-muted-foreground">
                          {" "}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingAddons;
