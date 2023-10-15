export default {
  name: 'hero',
  title: 'Hero Section',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Title for the hero section',
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'text',
      description: 'Subtitle or description for the hero section',
    },
    {
      name: 'image',
      title: 'Hero Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'The main image for the hero section',
    },
    {
      name: 'ctaText',
      title: 'CTA Text',
      type: 'string',
      description: 'Text for the Call to Action button',
    },
  ],
}
