import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: "export",
  trailingSlash: true, // 👈 ensures /form → /form/index.html
    images: {
    domains: ["res.cloudinary.com"], // 👈 Allow Cloudinary
  },
};

export default nextConfig;
