export default {
  name: 'featuredItem',
  title: 'Featured Item',
  type: 'object',
  fields: [
    {
      name: 'image',
      title: 'Item Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Image for the featured item',
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
          description:
            'Description of the image for accessibility (used when the image cannot be displayed or by screen readers)',
          options: {
            isHighlighted: true,
          },
        },
      ],
    },
    {
      name: 'title',
      title: 'Item Title',
      type: 'string',
      description: 'Title of the featured item',
    },
    {
      name: 'description',
      title: 'Item Description',
      type: 'text',
      description: 'Description or details about the featured item',
    },
    {
      name: 'date',
      title: 'Date',
      type: 'datetime',
      description: 'Date associated with this featured item',
    },
    {
      name: 'ctaLabel',
      title: 'CTA Label',
      type: 'string',
      description: 'Text for the call-to-action button (e.g. "Read More", "Shop Now")',
    },
    {
      name: 'ctaLink',
      title: 'CTA Link',
      type: 'url',
      description: 'Link for the call-to-action button',
    },
  ],
}
