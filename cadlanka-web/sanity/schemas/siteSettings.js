/** Sanity schema: siteSettings — singleton document */
export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  // Singleton — only one document of this type should exist
  __experimental_actions: ['update', 'publish'],
  fields: [
    {
      name: 'stats',
      title: 'Homepage Statistics',
      type: 'object',
      fields: [
        { name: 'yearsInOperation', title: 'Years in Operation', type: 'string', initialValue: '12+' },
        {
          name: 'partnerCountries',
          title: 'International Partner Countries',
          type: 'number',
          description: 'Current value: 2 (Norway + UK — §3.4)',
          initialValue: 2,
        },
        { name: 'projectsCompleted', title: 'Projects Completed', type: 'string', initialValue: '150+' },
      ],
    },
    {
      name: 'contactInfo',
      title: 'Contact Information',
      type: 'object',
      fields: [
        { name: 'email', title: 'Email', type: 'string' },
        { name: 'phone', title: 'Phone', type: 'string' },
        { name: 'whatsapp', title: 'WhatsApp', type: 'string' },
        { name: 'address', title: 'Address', type: 'text', rows: 3 },
      ],
    },
    {
      // Norway + UK only — §3.4
      name: 'partnerCountries',
      title: 'Partner Countries',
      type: 'array',
      description: 'Norway and UK only per client instructions.',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'country', title: 'Country', type: 'string' },
            { name: 'tag', title: 'Tag', type: 'string', description: 'e.g. RAIL_INFRA' },
            { name: 'description', title: 'Description', type: 'text', rows: 3 },
          ],
        },
      ],
    },
    {
      name: 'partnerLogos',
      title: 'Client & Partner Logos',
      type: 'array',
      description: 'Upload client/partner logos to display on the trust strip. Uses generic placeholders if empty.',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', title: 'Partner / Client Name', type: 'string' },
            { name: 'code', title: 'Reference Code', type: 'string', description: 'e.g. PRT-NOR-01' },
            { name: 'logoImage', title: 'Logo Image', type: 'image', options: { hotspot: true } },
            { name: 'url', title: 'Partner Website URL', type: 'url' },
          ],
          preview: { select: { title: 'name', subtitle: 'code', media: 'logoImage' } },
        },
      ],
    },
  ],
  preview: { prepare: () => ({ title: 'Site Settings' }) },
};
