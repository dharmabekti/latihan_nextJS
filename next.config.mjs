/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["static.nike.com", "lh3.googleusercontent.com"], // Tambahkan hostname di sini
  },
};

export default nextConfig;
