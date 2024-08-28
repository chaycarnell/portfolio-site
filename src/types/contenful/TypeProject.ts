import type { Asset, EntryFields, EntrySkeletonType } from 'contentful';

export interface TypeProjectFields {
  title?: EntryFields.Symbol;
  projectImage?: Asset[];
  technologies?: EntryFields.Symbol[];
  references?: EntryFields.Object;
  summary?: EntryFields.RichText;
  position?: EntryFields.Integer;
}

export type TypeProject = EntrySkeletonType<TypeProjectFields>;
