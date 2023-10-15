export default {
  name: 'carouselSlide',
  title: 'Carousel Slide',
  type: 'object',
  fields: [
    {
      name: 'image',
      title: 'Slide Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Image for the slide',
    },
    {
      name: 'title',
      title: 'Slide Title',
      type: 'string',
      description: 'Title displayed on the slide',
    },
    {
      name: 'subtitle',
      title: 'Slide Subtitle',
      type: 'string',
      description: 'Subtitle or smaller text displayed on the slide',
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
