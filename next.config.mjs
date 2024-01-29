/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        dangerouslyAllowSVG: true,
        domains: ["cdn.simpleicons.org"],
        remotePatterns: [
            {
                hostname: "cdn.simpleicons.org",
                protocol: "https",
                pathname: "/",
                port: "",
            },
        ],
    },
};

export default nextConfig;
