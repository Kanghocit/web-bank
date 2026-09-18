import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    if (process.env.VERCEL_ENV === "preview") return [];

    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
