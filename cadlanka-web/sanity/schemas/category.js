/** Sanity schema: category (taxonomy for project filtering) */
export default {
  name: 'category',
  title: 'Project Category',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Category Name',
      type: 'string',
      options: {
        list: [
          { title: 'Railway', value: 'Railway' },
          { title: 'Tram Systems', value: 'Tram Systems' },
          { title: 'Overhead Line', value: 'Overhead Line' },
          { title: 'Components', value: 'Components' },
        ],
      },
      validation: (R) => R.required(),
    },
  ],
  preview: { select: { title: 'title' } },
};
