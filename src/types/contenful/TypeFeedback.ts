import type { EntryFields, EntrySkeletonType } from './contentful.types';

export interface TypeFeedbackFields {
  feedback?: EntryFields.RichText;
  role?: EntryFields.Symbol;
}

export type TypeFeedback = EntrySkeletonType<TypeFeedbackFields>;
