import './global.css';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import { createMetadata } from '@/lib/metadata';
import { Provider } from './provider';
import PlausibleProvider from 'next-plausible';
import { GleapInit } from './gleap'
import { cn } from '@/lib/utils';

export const metadata = createMetadata({});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={cn(
      "min-h-screen bg-background font-sans antialiased",
      inter.variable,
    )} suppressHydrationWarning>
      <head>
        <PlausibleProvider
          domain="warpindex.com"
          trackOutboundLinks={true}
          trackFileDownloads={true}
          taggedEvents={true}
          hash={true}
        />
      </head>
      <body className="flex min-h-screen flex-col">
        <Provider>{children}</Provider>
        <GleapInit />
      </body>
    </html>
  );
}


