export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/studio', '/api/'],
      },
    ],
    sitemap: 'https://cadlankaeng.com/sitemap.xml',
  };
}
