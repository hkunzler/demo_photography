export default {
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
  fields: [
    {
      name: 'business',
      title: 'Business',
      type: 'string',
      string: 'The name of the business',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'navItems',
      title: 'Navigation Items',
      type: 'array',
      of: [{type: 'navItem'}],
      description: 'The items to be displayed in the navigation menu',
    },
  ],
}
