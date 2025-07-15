import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  experimental:{
    viewTransition: true,
  },
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "raw.githubusercontent.com",
      },{
        hostname: "contentful.harrypotter.com"
      }
    ],

  },
};

export default nextConfig;
