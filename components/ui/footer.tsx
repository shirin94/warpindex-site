'use client';

import Link from 'next/link';
import { Twitter, Linkedin, CheckCircle2 } from "lucide-react";
import { useEffect, useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    setShowSuccess(urlParams.get('submission') === 'true' && urlParams.get('form_type') === 'subscribe');
  }, []);

  return (
    <footer className="py-12 md:py-16">
      <div className="container border-t pt-12 md:pt-16">
        <div className="grid gap-8 md:grid-cols-12">
          {/* Logo and tagline */}
          <div className="md:col-span-4">
            <Link href="/">
              <img src="/logo.png" alt="Warpindex" className="h-6 w-auto" />
            </Link>
            <p className="mt-2 text-sm text-muted-foreground">
              Website Indxing on Autopilot
            </p>
          </div>

          {/* Links columns */}
          <div className="grid grid-cols-2 gap-8 md:col-span-4">
            <div>
              <h4 className="mb-3 text-sm font-semibold">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/">Overview</Link></li>
                <li><Link href="https://help.warpindex.com/en/collections/1-getting-started">Getting Started</Link></li>
                <li><Link href="/pricing">Pricing</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-3 text-sm font-semibold">Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="https://help.warpindex.com">Docs</Link></li>
                <li><Link href="https://help.warpindex.com/en/collections/8-faqs">FAQ</Link></li>
                <li><Link href="mailto:support@warpindex.com">Contact</Link></li>
              </ul>
            </div>
          </div>

          {/* Subscribe section */}
          <div className="md:col-span-4">
            <h4 className="mb-3 text-sm font-semibold">Stay Updated</h4>
            <form action="https://submit-form.com/OeDaQr1nd" className="flex flex-col gap-4">
              <input type="hidden" name="form_name" value="footer_subscription" />
              <input type="hidden" name="_redirect" value="https://warpindex.com/?submission=true&form_type=subscribe" />
              <div className="flex gap-2">
                <Input placeholder="Enter your email" type="email" name="email" required />
                <Button type="submit">Subscribe</Button>
              </div>
              <div className="flex gap-4">
                <Link href="https://twitter.com/warpindex" className="text-muted-foreground hover:text-foreground">
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link href="https://linkedin.com/company/warpindex" className="text-muted-foreground hover:text-foreground">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </div>
            </form>
            <Dialog open={showSuccess} onOpenChange={setShowSuccess}>
              <DialogContent className="sm:max-w-md">
                <div className="flex flex-col items-center gap-4 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-50">
                    <CheckCircle2 className="h-8 w-8 text-green-600" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-semibold">Successfully Subscribed!</h3>
                    <p className="text-muted-foreground">You&apos;ll now receive updates about Warpindex&apos;s latest features and announcements.</p>
                  </div>
                  <Button onClick={() => setShowSuccess(false)} className="mt-2">Close</Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </footer>
  );
}