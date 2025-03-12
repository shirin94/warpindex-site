import { Button } from "@/components/ui/button";
import Link from "next/link";

const FeatureIntro = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="flex flex-col items-center text-center">
          <h3 className="my-6 text-pretty text-3xl font-semibold md:text-4xl lg:max-w-3xl lg:text-5xl">
            Why Warpindex?
          </h3>
          <p className="mb-8 text-muted-foreground lg:max-w-3xl lg:text-lg">
          All webpages do not get automatically indexed by Google anymore due to algorithm changes in the new world of AI-generated content. WarpIndex crawls your sites and pushes them to Google index automatically to vastly improve the time taken and probability of getting indexed.
          </p>
          <Link href="https://app.warpindex.com/signup"><Button variant="outline">Star Free</Button></Link>
        </div>
      </div>
    </section>
  );
};

export { FeatureIntro };
