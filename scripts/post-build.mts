import env from '@next/env';
import { updateSearchIndexes } from './update-orama-index.mjs';

env.loadEnvConfig(process.cwd());
/*
async function main() {
  try {
    console.log('Running post-build tasks...');
    await Promise.all([updateSearchIndexes()]);
    console.log('Post-build tasks completed successfully');
  } catch (error) {
    console.error('Post-build tasks failed:', error);
    process.exit(1);
  }
}

main();
*/