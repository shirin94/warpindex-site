'use client';

import { OramaClient } from '@oramacloud/client';
import type { SharedProps } from 'fumadocs-ui/components/dialog/search';
import SearchDialog from 'fumadocs-ui/components/dialog/search-orama';

const client = new OramaClient({
  endpoint: 'https://cloud.orama.run/v1/indexes/warpindex-site-avh2l6',
  api_key: 'jnelEMxKxc4jVzzOas7IActlmhhbbZQU',
});

export default function CustomSearchDialog(
  props: SharedProps,
): React.ReactElement {
  return (
    <SearchDialog
      {...props}
      allowClear
      client={client}
      tags={[]}
      showOrama
    />
  );
}
