import { createClient } from '@sanity/client';

export default createClient({
	projectId: process.env.VITE_SANITY_STUDIO_PROJECT_ID,
	dataset: process.env.VITE_SANITY_STUDIO_DATASET,
	useCdn: true,
	apiVersion: process.env.VITE_SANITY_STUDIO_API_VERSION
});
