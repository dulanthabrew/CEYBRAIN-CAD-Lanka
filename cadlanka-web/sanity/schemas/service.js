/** Sanity schema: service */
export default {
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    { name: 'title', title: 'Service Title', type: 'string', validation: (R) => R.required() },
    {
      name: 'refCode',
      title: 'REF Code',
      type: 'string',
      description: 'e.g. SRV-01',
    },
    { name: 'description', title: 'Description', type: 'text', rows: 4 },
    { name: 'icon', title: 'Icon Name', type: 'string', description: 'Material Symbol icon name' },
    {
      name: 'bullets',
      title: 'Key Capabilities',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'image',
      title: 'Service Image',
      type: 'image',
      options: { hotspot: true },
    },
  ],
  preview: { select: { title: 'title', subtitle: 'refCode' } },
};
