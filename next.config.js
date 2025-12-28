/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { appDir: true },

  reactStrictMode: true,
  compiler: { removeConsole: true },

  images: {
    remotePatterns: [
      { protocol: "https", hostname: "assets.coingecko.com" },
      { protocol: "https", hostname: "loremflickr.com" }
    ],
    formats: ["image/webp", "image/avif"],
    minimumCacheTTL: 86400,
    deviceSizes: [64, 96, 128, 256, 384, 512],
    imageSizes: [32, 48, 64, 96, 128, 256],
  },
};

module.exports = nextConfig;


// /** @type {import('next').NextConfig} */
// const nextConfig = { experimental: { appDir: true } };
// module.exports = nextConfig;
