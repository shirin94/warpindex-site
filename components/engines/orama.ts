import type {
  Engine,
  MessageRecord,
  MessageReference,
} from '@/components/search-ai';
import { OramaClient } from '@oramacloud/client';

const context =
  'The user is a developer or QA engineer who knows some playwright and software testing, but is new to Warpindex.';
const endpoint = 'https://cloud.orama.run/v1/indexes/warpindex-site-avh2l6';
const apiKey = 'jnelEMxKxc4jVzzOas7IActlmhhbbZQU';

export async function createOramaEngine(): Promise<Engine> {
  if (!endpoint || !apiKey) throw new Error('Failed to find api keys');
  const client = new OramaClient({
    endpoint,
    api_key: apiKey,
  });

  const instance = client.createAnswerSession({
    userContext: context,
    inferenceType: 'documentation',
    events: {
      onSourceChange(sources) {
        const last = instance.getMessages().at(-1);

        if (last) {
          (last as MessageRecord).references = (
            sources as unknown as typeof sources.hits
          ).map((result) => result.document as MessageReference);
        }
      },
      onRelatedQueries(queries) {
        const last = instance.getMessages().at(-1);

        if (last) {
          (last as MessageRecord).suggestions = queries;
        }
      },
    },
  });

  return {
    async prompt(text, onUpdate, onEnd) {
      let v = '';
      const stream = await instance.askStream({
        term: text,
      });

      for await (const block of stream) {
        v = block;
        onUpdate?.(block);
      }
      onEnd?.(v);
    },
    abortAnswer() {
      instance.abortAnswer();
    },
    getHistory() {
      return instance.getMessages();
    },
    clearHistory() {
      instance.clearSession();
    },
    async regenerateLast(onUpdate, onEnd) {
      const result = await instance.regenerateLast({ stream: true });
      let v = '';

      for await (const block of result) {
        v = block;
        onUpdate?.(block);
      }
      onEnd?.(v);
    },
  };
}
