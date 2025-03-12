import { Metadata } from 'next';

export const baseUrl = new URL(
  process.env.NEXT_PUBLIC_APP_URL ?? 'https://warpindex.com'
);

export function createMetadata(metadata: Metadata): Metadata {
  return {
    ...metadata,
    title: {
      template: '%s | Warpindex',
      default: 'Website Indexing on Autopilot. Boost your website SEO with Warpindex.',
    },
    description: 'Website Indexing on Autopilot. Boost your website SEO with Warpindex.',
    metadataBase: baseUrl,
    openGraph: {
      title: 'Website Indexing on Autopilot. Boost your website SEO with Warpindex.',
      description: 'Warpindex continuously scans your site and pushes pages to Google Index to boost your website SEO.',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Website Indexing on Autopilot. Boost your website SEO with Warpindex.',
      description: 'Warpindex continuously scans your site and pushes pages to Google Index to boost your website SEO.',
    },
  };
}