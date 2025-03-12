'use client';

import { Zap, CheckCircle2 } from "lucide-react";
import { useEffect, useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Changelog1 = () => {
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    setShowSuccess(urlParams.get('submission') === 'true');
  }, []);

  return (
    <section className="py-32">
      <div className="container">
        <div className="text-center">
          <h1 className="mb-4 text-3xl font-semibold md:text-5xl">Changelog</h1>
          <p className="mb-6 text-muted-foreground md:text-lg">
            Get the latest updates and improvements to Warpindex.
          </p>
          <form action="https://submit-form.com/uQAExlqxW" className="mx-auto mb-9 flex w-full max-w-sm items-center space-x-2">
            <input type="hidden" name="form_name" value="changelog_subscription" />
            <input type="hidden" name="_redirect" value="https://warpindex.com/changelog?submission=true" />
            <Input type="email" name="email" placeholder="abc@example.com" required />
            <Button type="submit">Subscribe</Button>
          </form>
          <Dialog open={showSuccess} onOpenChange={setShowSuccess}>
            <DialogContent className="sm:max-w-md">
              <div className="flex flex-col items-center gap-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-50">
                  <CheckCircle2 className="h-8 w-8 text-green-600" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-semibold">Successfully Subscribed!</h3>
                  <p className="text-muted-foreground">You&apos;ll now receive updates about Warpindex.</p>
                </div>
                <Button onClick={() => setShowSuccess(false)} className="mt-2">Close</Button>
              </div>
            </DialogContent>
          </Dialog>
          <div className="mx-auto flex w-fit items-center rounded-lg border px-3 py-2.5 text-xs">
            <span className="text-muted-foreground">
              Announcing a forever free plan!
            </span>
            <a
              className="ml-2 flex items-center font-semibold hover:underline"
              href="#"
            >
              v0.1.0 <Zap className="h-3.5" />
            </a>
          </div>
        </div>
        <div className="mx-auto mt-20 max-w-screen-lg space-y-20 md:mt-40 md:space-y-32">
          <div className="relative flex flex-col gap-5 md:flex-row md:gap-20">
            <div className="top-28 flex h-min shrink-0 items-center gap-5 md:sticky">
              <Badge variant="secondary">Version 0.1.0</Badge>
              <span className="text-xs font-medium text-muted-foreground">
                29 Dec 2024
              </span>
            </div>
            <div>
              <h2 className="mb-4 text-lg font-semibold md:text-2xl md:leading-5">
                Launching our free plan!
              </h2>
              <p className="text-muted-foreground md:text-lg">
                We are excited to launch our free plan!
              </p>
              <ul className="ml-4 mt-5 space-y-2 text-muted-foreground md:text-lg">
                <li className="list-disc">Add upto 5 users</li>
                <li className="list-disc">Get 100 files</li>
              </ul>
              <img
                src="https://shadcnblocks.com/images/block/placeholder-aspect-video-1.svg"
                alt="placeholder"
                className="mt-10 w-full rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Changelog1;
