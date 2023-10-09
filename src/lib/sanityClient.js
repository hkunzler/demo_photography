import {createClient} from '@sanity/client';

export default createClient({
  projectId: 'u1bm8ijp',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-10-08'
});