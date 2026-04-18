import type { Document } from '@contentful/rich-text-types';

export interface Sys {
  id: string;
  type: string;
  contentType?: { sys: { id: string } };
}

export interface AssetFile {
  url: string;
  contentType: string;
  fileName: string;
  details?: {
    size: number;
    image?: { width: number; height: number };
  };
}

export interface Asset {
  sys: Sys;
  fields: {
    title?: string;
    description?: string;
    file?: AssetFile;
  };
}

export interface EntrySkeletonType<Fields = {}, Id extends string = string> {
  contentTypeId: Id;
  fields: Fields;
}

export interface Entry<T extends EntrySkeletonType> {
  sys: Sys;
  fields: T['fields'];
}

export interface EntryCollection<T extends EntrySkeletonType> {
  sys: Sys;
  total: number;
  skip: number;
  limit: number;
  items: Entry<T>[];
}

export namespace EntryFields {
  export type Symbol = string;
  export type RichText = Document;
  export type Integer = number;
}
