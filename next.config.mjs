/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true,
  },
  typescript: { ignoreBuildErrors: true },
  transpilePackages: ['ideep-design-system-2'],
};

export default nextConfig;
