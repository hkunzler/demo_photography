export default {
  name: 'gallery',
  title: 'Gallery',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Gallery Title',
      type: 'string',
      description: 'Title of the gallery (e.g. "Wedding Photos", "Nature Collection")',
    },
    {
      name: 'subtitle',
      title: 'Gallery Subtitle',
      type: 'string',
      description: 'Gallery Description',
    },
    {
      name: 'photographs',
      title: 'Photographs',
      type: 'array',
      of: [{type: 'photograph'}],
      description: 'The photographs in this gallery',
    },
  ],
}
