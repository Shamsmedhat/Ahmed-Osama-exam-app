/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "exam.elevateegy.com",
            port: "",
            pathname: "/uploads/**",
          },
        ],
      },
};

export default nextConfig;
