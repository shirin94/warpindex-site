import fs from 'fs';
import { globby } from 'globby';
import prettier from 'prettier';

async function generate() {
  const prettierConfig = await prettier.resolveConfig('./.prettierrc');

  // Get static pages
  const pages = await globby([
    'app/**/page.tsx',
    '!app/**/_*/**',
    '!app/**/api/**',
    '!app/docs/**', // Exclude docs directory as we'll handle it separately
  ]);

  // Get doc pages from the build output
  const docPages = await globby(['out/docs/**/*.html'])
    .then(pages => pages
      .map(page => page
        .replace('out', '')
        .replace('/index.html', '')
        .replace('.html', '')
      )
      .filter(page => !page.includes('/_'))
    );

  const baseUrl = 'https://warpindex.com';

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${[
        // Add static pages
        ...pages.map((page) => {
          const path = page
            .replace('app', '')
            .replace('/page.tsx', '')
            .replace('/(home)', '')
            .replace(/\[\[\.\.\..*?\]\]/, '');

          // Skip dynamic routes with parameters
          if (path.includes('[') || path.includes(']')) {
            return '';
          }

          const route = path === '' ? '' : path;

          return `
            <url>
              <loc>${baseUrl}${route}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>daily</changefreq>
              <priority>0.7</priority>
            </url>
          `;
        }),
        // Add docs index page
        `
          <url>
            <loc>${baseUrl}/docs</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <changefreq>daily</changefreq>
            <priority>0.7</priority>
          </url>
        `,
        // Add doc pages
        ...docPages.map((path) => `
          <url>
            <loc>${baseUrl}${path}</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <changefreq>daily</changefreq>
            <priority>0.7</priority>
          </url>
        `),
      ]
        .filter(Boolean)
        .join('')}
    </urlset>
  `;

  const formatted = await prettier.format(sitemap, {
    ...prettierConfig,
    parser: 'html',
  });

  fs.writeFileSync('public/sitemap.xml', formatted);
  console.log('✅ Generated sitemap.xml');
}

generate().catch((err) => {
  console.error(err);
  process.exit(1);
});