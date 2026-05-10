const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com"
      },
      {
        protocol: "https",
        hostname: "ik.imagekit.io"
      }
    ],
    formats: ["image/avif", "image/webp"]
  }
};

module.exports = nextConfig;
