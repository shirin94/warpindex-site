# warpindex-website

This is a Next.js application generated with
[Create Fumadocs](https://github.com/fuma-nama/fumadocs).

## Development:

```bash
pnpm dev
```

Open http://localhost:3000 with your browser to see the result.

## Deployment

This website is deployed on Cloudflare Pages and automatically deploys when changes are pushed to the main branch.

For manual deployments, you can use:

```bash
pnpm run deploy
```

The deploy script will build the application and deploy it to Cloudflare Pages. Make sure you have the necessary Cloudflare credentials and permissions set up before deploying.

## Learn More

To learn more about Next.js and Fumadocs, take a look at the following
resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js
  features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Fumadocs](https://fumadocs.vercel.app) - learn about Fumadocs

## Adding Redirects

Note: The `_redirects` file method is not working for this project. Please use the Next.js redirect method below.

Create a new page in the `app` directory and use Next.js's built-in redirect function:

```typescript
// app/example/page.tsx
import { redirect } from 'next/navigation';

export default async function ExamplePage() {
    redirect('https://example.com');
}
```

For example, to redirect `/community` to Discord:

```typescript
// app/community/page.tsx
import { redirect } from 'next/navigation';

export default async function CommunityPage() {
    redirect('https://discord.gg/abcdefg');
}
```
