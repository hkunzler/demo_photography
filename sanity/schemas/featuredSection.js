export default {
  name: 'featuredSection',
  title: 'Featured Section',
  type: 'document',
  fields: [
    {
      name: 'sectionTitle',
      title: 'Section Title',
      type: 'string',
      description: 'Title of the entire featured section',
    },
    {
      name: 'featuredItems',
      title: 'Featured Items',
      type: 'array',
      of: [{type: 'featuredItem'}],
      description: 'The items to be featured in this section',
    },
  ],
}
