import type { Asset, EntryFields, EntrySkeletonType } from './contentful.types';

export interface TypeProjectFields {
  title?: EntryFields.Symbol;
  projectImage?: Asset[];
  technologies?: EntryFields.Symbol[];
  references?: { title: string; link: string }[];
  summary?: EntryFields.RichText;
  position?: EntryFields.Integer;
}

export type TypeProject = EntrySkeletonType<TypeProjectFields>;
