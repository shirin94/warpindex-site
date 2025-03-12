import {
  defineConfig,
  defineDocs,
  defineCollections,
  frontmatterSchema,
  metaSchema,
} from 'fumadocs-mdx/config';
import { transformerTwoslash } from 'fumadocs-twoslash';
import remarkMath from 'remark-math';
import {
  fileGenerator,
  remarkDocGen,
  remarkInstall,
  remarkTypeScriptToJavaScript,
} from 'fumadocs-docgen';
import rehypeKatex from 'rehype-katex';
import { z } from 'zod';
import { rehypeCodeDefaultOptions } from 'fumadocs-core/mdx-plugins';

export const { docs, meta } = defineDocs({
  dir: 'content/docs',
});

export const blog = defineCollections({
  type: 'doc',
  dir: 'content/blogs',
  async: true,
  schema: frontmatterSchema.extend({
    author: z.string(),
    image: z.string(),
    date: z.string().date().or(z.date()).optional(),
  }),
});

export default defineConfig({
  mdxOptions: {
    rehypePlugins: [[rehypeKatex]],
    remarkPlugins: [
      remarkMath,
      [remarkInstall, { persist: { id: 'package-manager' } }],
      [remarkDocGen, { generators: [fileGenerator()] }],
      remarkTypeScriptToJavaScript,
    ],
    recmaPlugins: [],
    format: 'mdx'
  },
});