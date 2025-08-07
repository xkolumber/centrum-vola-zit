/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    domains: ["d9xqr11l6v5wz.cloudfront.net"],
    unoptimized: true,
  },
};

export default nextConfig;
