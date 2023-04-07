/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  exportPathMap: async function (defaultPathMap) {
    return defaultPathMap;
  }
}

module.exports = nextConfig
