import { createClient } from '../../utils/fetchClient';
import { ContentfulConfig } from './config';

// Initialise contentful client
export const client = createClient({
  space: ContentfulConfig.contentSpace,
  accessToken: ContentfulConfig.clientSafeContentToken,
});
