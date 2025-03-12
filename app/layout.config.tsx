import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { Mail } from 'lucide-react';
import { type LinkItemType } from 'fumadocs-ui/layouts/docs';
import { Button } from '@/components/ui/button';

export const linkItems: LinkItemType[] = [
  {
    icon: <Mail />,
    text: 'Contact',
    url: '/contact',
    active: 'nested-url',
  },
  {
    type: 'button',
    url: 'https://app.warpindex.com/signup',
    text: 'Start Free',
    external: true,
  },
];


/**
 * Shared layout configurations
 *
 * you can configure layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  disableThemeSwitch: true,
  nav: {
    title: <img src="/logo.png" alt="Warpindex" className="h-8" />,
    enableSearch: false,
  },
  links: [
    {
      text: 'Pricing',
      url: '/pricing',
      active: 'url',
    },
    {
      text: 'Help',
      url: 'https://help.warpindex.com',
      active: 'nested-url',
    },
    {
      type: 'custom',
      secondary: true,
      children: <Button variant="link" className="text-white h-8 px-3" asChild><a href="https://app.warpindex.com/login" target="_blank" rel="noopener noreferrer">Login</a></Button>,
    },
    {
      type: 'custom',
      secondary: true,
      children: <Button variant="outline" className="bg-gradient-to-r from-indigo-500 to-green-500 hover:from-indigo-600 hover:to-green-600 text-white h-8 px-3" asChild><a href="https://app.warpindex.com/signup" target="_blank" rel="noopener noreferrer">Start Free</a></Button>,
    },
  ],
};
