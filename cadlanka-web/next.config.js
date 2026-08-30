/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
    ],
  },

  async headers() {
    return [
      {
        // Sanity Studio requires these CSP relaxations
        source: '/studio/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "frame-ancestors 'none'",
          },
        ],
      },
    ];
  },

  // Webpack config: shim React exports that @sanity/ui@5 alpha expects
  // (Activity is a React 19 canary API not yet in stable 19.x)
  webpack(config, { isServer }) {
    // Only needed for client bundles (where @sanity/ui runs)
    if (!isServer) {
      config.resolve.alias = {
        ...config.resolve.alias,
      };
    }
    return config;
  },
};

module.exports = nextConfig;
