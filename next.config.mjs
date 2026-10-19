/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Standalone output only for the Docker image; Vercel/local builds are unchanged.
  ...(process.env.DOCKER_BUILD === "1" && { output: "standalone" }),
  async redirects() {
    return [
      { source: "/resume.pdf", destination: "/resume/general.pdf", permanent: true },
    ];
  },
};

export default nextConfig;
