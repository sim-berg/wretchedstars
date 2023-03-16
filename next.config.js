/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    target: "serverless",
    async rewrites() {
      return [
        // Rewrite everything to `pages/index`
        {
          source: "/:any*",
          destination: "/",
        },
      ];
    },
    
    appDir: true,
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig
