import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'photography_template',

  projectId: process.env.VITE_SANITY_STUDIO_PROJECT_ID,
  dataset: process.env.VITE_SANITY_STUDIO_DATASET,

  plugins: [deskTool(undefined), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
