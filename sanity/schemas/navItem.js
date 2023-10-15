// schemas/navItem.js

export default {
  name: 'navItem',
  title: 'Navigation Item',
  type: 'object',
  fields: [
    {
      name: 'label',
      title: 'Label',
      type: 'string',
      description: 'Text of the navigation item (e.g. "Home", "About")',
    },
    {
      name: 'link',
      title: 'Link',
      type: 'string',
      description: 'URL or route of the navigation item (e.g. "/home", "/about")',
    },
  ],
}
