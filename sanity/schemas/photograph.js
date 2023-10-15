export default {
  name: 'photograph',
  title: 'Photograph',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
          description: 'Description of the image for accessibility',
          options: {
            isHighlighted: true,
          },
        },
      ],
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'date',
      title: 'Date',
      type: 'datetime',
      description: 'Date the photograph was taken or published',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{type: 'category'}],
    },
  ],
}
