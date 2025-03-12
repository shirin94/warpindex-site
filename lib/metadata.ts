import { Metadata } from 'next';

export const baseUrl = new URL(
  process.env.NEXT_PUBLIC_APP_URL ?? 'https://warpindex.com'
);

export function createMetadata(metadata: Metadata): Metadata {
  return {
    ...metadata,
    title: {
      template: '%s | Warpindex',
      default: 'Control access to shared files, track engagement, collect e-signatures, and create secure data rooms with Warpindex’s modern document sharing platform.',
    },
    description: 'Website Indxing on Autopilot. Generate end-to-end tests with 10x speed using Gen AI.',
    metadataBase: baseUrl,
    openGraph: {
      title: 'Control access to shared files, track engagement, collect e-signatures, and create secure data rooms with Warpindex’s modern document sharing platform.',
      description: 'Website Indxing on Autopilot. Generate end-to-end tests with 10x speed using Gen AI.',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Control access to shared files, track engagement, collect e-signatures, and create secure data rooms with Warpindex’s modern document sharing platform.',
      description: 'Website Indxing on Autopilot. Generate end-to-end tests with 10x speed using Gen AI.',
    },
  };
}