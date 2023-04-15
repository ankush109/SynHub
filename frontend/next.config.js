/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.dicebear.com",
        port: "",
        pathname: "/api/personas/**",
      },
      {
        protocol: "https",
        hostname: "hackathon-bucket-ankush.s3.ap-south-1.amazonaws.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};


module.exports = nextConfig
