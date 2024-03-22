/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BACKEND_URL: 'https://t8adfcbe.vercel.app',
  },
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
