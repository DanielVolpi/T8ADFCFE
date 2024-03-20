/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BACKEND_URL: 'http://localhost:4000',
  },
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
