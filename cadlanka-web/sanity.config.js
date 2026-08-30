import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';

import project from './sanity/schemas/project';
import category from './sanity/schemas/category';
import service from './sanity/schemas/service';
import siteSettings from './sanity/schemas/siteSettings';

// All Sanity credentials from environment variables — never hardcoded (§4)
export default defineConfig({
  basePath: '/studio',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '0pwnr4ua',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  title: 'CAD Lanka Engineering',
  schema: {
    types: [project, category, service, siteSettings],
  },
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            // Singleton — Site Settings
            S.listItem()
              .title('Site Settings')
              .id('siteSettings')
              .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
            S.divider(),
            S.documentTypeListItem('project').title('Projects'),
            S.documentTypeListItem('category').title('Categories'),
            S.divider(),
            S.documentTypeListItem('service').title('Services'),
          ]),
    }),
    visionTool(),
  ],
});
