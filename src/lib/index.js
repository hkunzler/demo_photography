import { createClient } from '@sanity/client';

export default createClient({
  projectId: import.meta.env.VITE_SANITY_STUDIO_PROJECT_ID,
  dataset: import.meta.env.VITE_SANITY_STUDIO_DATASET,
  useCdn: true,
  apiVersion: import.meta.env.VITE_SANITY_STUDIO_API_VERSION
});
