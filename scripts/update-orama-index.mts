import { sync, type OramaDocument } from 'fumadocs-core/search/orama-cloud';
import * as fs from 'node:fs/promises';
import { CloudManager } from '@oramacloud/client';
import { join } from 'path';

export async function updateSearchIndexes(): Promise<void> {
  const apiKey = process.env.ORAMA_PRIVATE_API_KEY;

  if (!apiKey) {
    console.log('no api key for Orama found, skipping');
    return;
  }

  try {
    const staticJsonPath = join(process.cwd(), 'out', 'static.json');
    const content = await fs.readFile(staticJsonPath);
    const records = JSON.parse(content.toString()) as OramaDocument[];

    const manager = new CloudManager({ api_key: apiKey });

    await sync(manager, {
      index: 'index_id_here',
      documents: records,
    });

    console.log(`search updated: ${records.length} records`);
  } catch (error) {
    console.error('Failed to update search indexes:', error);
    throw error;
  }
}
