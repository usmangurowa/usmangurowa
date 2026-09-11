/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: "/resume.pdf", destination: "/resume/general.pdf", permanent: true },
    ];
  },
};

export default nextConfig;
