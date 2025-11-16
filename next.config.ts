/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "res.cloudinary.com" },
      { protocol: "https", hostname: "encrypted-tbn0.gstatic.com" },
      { protocol: "https", hostname: "incubator.ucf.edu" },
      { protocol: "https", hostname: "www.polytechnique-insights.com" },
      { protocol: "https", hostname: "www.pcworld.com" },
      { protocol: "https", hostname: "cdn-icons-png.flaticon.com" }, // missing required domain
    ],
  },
};

module.exports = nextConfig;
