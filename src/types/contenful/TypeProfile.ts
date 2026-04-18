import type { Asset, EntryFields, EntrySkeletonType } from './contentful.types';

export interface TypeProfileFields {
  name?: EntryFields.Symbol;
  role?: EntryFields.Symbol;
  portrait?: Asset;
  about?: EntryFields.RichText;
  skills?: EntryFields.Symbol[];
  technologies?: EntryFields.Symbol[];
  contacts?: { name: string; value: string }[];
  resume?: Asset;
}

export type TypeProfile = EntrySkeletonType<TypeProfileFields>;
