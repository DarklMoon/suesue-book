/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "i.pinimg.com",
      "media.discordapp.net",
      "cdn-icons-png.flaticon.com",
      "test-cloudbased.s3.amazonaws.com",
    ], // Add the hostname here
  },
};

export default nextConfig;
