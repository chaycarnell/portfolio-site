import type {
  Asset,
  Entry,
  EntryCollection,
  EntrySkeletonType,
  Sys,
} from '@sharedTypes/contenful/contentful.types';

interface ContentfulClientConfig {
  space: string;
  accessToken: string;
  environment?: string;
}

interface GetEntriesQuery {
  content_type: string;
  order?: string | string[];
  [key: string]: unknown;
}

interface RawLink {
  sys: { type: 'Link'; linkType: string; id: string };
}

const BASE_URL = 'https://cdn.contentful.com';

function isLink(value: unknown): value is RawLink {
  return (
    typeof value === 'object' &&
    value !== null &&
    'sys' in value &&
    (value as RawLink).sys.type === 'Link'
  );
}

function resolveLinks<T>(
  fields: Record<string, unknown>,
  assets: Map<string, Asset>,
): T {
  const resolved: Record<string, unknown> = {};

  for (const [key, value] of Object.entries(fields)) {
    if (Array.isArray(value)) {
      resolved[key] = value.map(item =>
        isLink(item) ? (assets.get(item.sys.id) ?? item) : item,
      );
    } else if (isLink(value)) {
      resolved[key] = assets.get(value.sys.id) ?? value;
    } else {
      resolved[key] = value;
    }
  }

  return resolved as T;
}

function buildAssetMap(includes?: { Asset?: Asset[] }): Map<string, Asset> {
  const map = new Map<string, Asset>();
  if (includes?.Asset) {
    for (const asset of includes.Asset) {
      map.set(asset.sys.id, asset);
    }
  }
  return map;
}

export function createClient(config: ContentfulClientConfig) {
  const { space, accessToken, environment = 'master' } = config;
  const baseUrl = `${BASE_URL}/spaces/${space}/environments/${environment}`;

  async function request<T>(
    path: string,
    params?: URLSearchParams,
  ): Promise<T> {
    const url = new URL(`${baseUrl}${path}`);
    url.searchParams.set('access_token', accessToken);
    if (params) {
      params.forEach((value, key) => url.searchParams.set(key, value));
    }

    const response = await fetch(url.toString());

    if (!response.ok) {
      throw new Error(
        `Contentful API error: ${response.status} ${response.statusText}`,
      );
    }

    return response.json() as Promise<T>;
  }

  return {
    async getEntry<T extends EntrySkeletonType>(
      entryId: string,
    ): Promise<Entry<T>> {
      // Use the collection endpoint with sys.id filter to get linked assets resolved
      const params = new URLSearchParams();
      params.set('sys.id', entryId);

      const data = await request<{
        items: { sys: Sys; fields: Record<string, unknown> }[];
        includes?: { Asset?: Asset[] };
      }>('/entries', params);

      if (!data.items.length) {
        throw new Error(`Entry not found: ${entryId}`);
      }

      const assets = buildAssetMap(data.includes);
      const item = data.items[0];

      return {
        sys: item.sys,
        fields: resolveLinks<T['fields']>(item.fields, assets),
      };
    },

    async getEntries<T extends EntrySkeletonType>(
      query: GetEntriesQuery,
    ): Promise<EntryCollection<T>> {
      const params = new URLSearchParams();
      for (const [key, value] of Object.entries(query)) {
        if (value !== undefined) {
          params.set(
            key,
            Array.isArray(value) ? value.join(',') : String(value),
          );
        }
      }

      const data = await request<{
        sys: Sys;
        total: number;
        skip: number;
        limit: number;
        items: { sys: Sys; fields: Record<string, unknown> }[];
        includes?: { Asset?: Asset[] };
      }>('/entries', params);

      const assets = buildAssetMap(data.includes);

      return {
        sys: data.sys,
        total: data.total,
        skip: data.skip,
        limit: data.limit,
        items: data.items.map(item => ({
          sys: item.sys,
          fields: resolveLinks<T['fields']>(item.fields, assets),
        })),
      };
    },
  };
}
