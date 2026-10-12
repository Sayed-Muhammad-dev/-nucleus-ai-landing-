/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    cpus: 2,
    outputFileTracingIncludes: {
      "/*": [
        "./server/config.json",
        "./server/seed.json",
        "./public/workspace.html",
      ],
    },
  },
};
export default nextConfig;
