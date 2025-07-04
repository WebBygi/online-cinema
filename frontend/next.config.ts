import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
      }
    ]
  },
  sassOptions: {
    includePaths: ['./app/styles'],
    prependData: `@import "variables.scss";`,
  },
  poweredByHeader: false,
  env: {
    APP_URL: process.env.REACT_APP_URL,
    APP_ENV: process.env.REACT_APP_ENV
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:4200/api/:path*'
      },
      {
        source: '/uploads/:path*',
        destination: 'http://localhost:4200/uploads/:path*'
      }
    ]
  }
};

export default nextConfig;
