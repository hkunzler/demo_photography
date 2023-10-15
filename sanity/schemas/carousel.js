export default {
  name: 'carousel',
  title: 'Carousel',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Carousel Name',
      type: 'string',
      description: 'Name of the carousel (e.g. "Homepage Carousel")',
    },
    {
      name: 'slides',
      title: 'Slides',
      type: 'array',
      of: [{type: 'carouselSlide'}],
      description: 'The slides contained within this carousel',
    },
  ],
}
