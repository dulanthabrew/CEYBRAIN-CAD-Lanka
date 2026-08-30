import { getAllProjectSlugs } from '@/lib/sanity';

const BASE_URL = 'https://cadlankaeng.com';

const STATIC_ROUTES = [
  { url: BASE_URL, changeFrequency: 'weekly', priority: 1 },
  { url: `${BASE_URL}/services`, changeFrequency: 'monthly', priority: 0.9 },
  { url: `${BASE_URL}/projects`, changeFrequency: 'weekly', priority: 0.9 },
  { url: `${BASE_URL}/about`, changeFrequency: 'monthly', priority: 0.7 },
  { url: `${BASE_URL}/contact`, changeFrequency: 'monthly', priority: 0.8 },
];

export default async function sitemap() {
  let projectRoutes = [];
  try {
    const slugs = await getAllProjectSlugs();
    projectRoutes = slugs.map((s) => ({
      url: `${BASE_URL}/projects/${s.slug}`,
      changeFrequency: 'monthly',
      priority: 0.6,
    }));
  } catch {
    // Sanity not configured — skip project routes
  }

  return [...STATIC_ROUTES, ...projectRoutes];
}
