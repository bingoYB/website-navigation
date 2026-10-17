/** @type {import('next').NextConfig} */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig = {
  exportPathMap: async function() {
    return {
      '/': { page: '/' },
      '/nav/study': { page: '/nav/[tab]', query: { tab: 'study' } },
      '/nav/life': { page: '/nav/[tab]', query: { tab: 'life' } },
      '/nav/films': { page: '/nav/[tab]', query: { tab: 'films' } },
      '/nav/tools': { page: '/nav/[tab]', query: { tab: 'tools' } },
    };
  },
  basePath,
  assetPrefix: basePath,
  reactStrictMode: true,
  output: "standalone",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.iowen.cn",
      },
    ],
  },
};

module.exports = nextConfig;
