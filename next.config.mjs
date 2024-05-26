import withPWA from "@ducanh2912/next-pwa";

const pwaConfig = withPWA({
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  swcMinify: true,
  dest: "public",
  fallbacks: {
    //image: "/static/images/fallback.png",
    document: "/offline", // if you want to fallback to a custom page rather than /_offline
    // font: '/static/font/fallback.woff2',
    // audio: ...,
    // video: ...,
  },
  workboxOptions: {
    disableDevLogs: true,
  },
  // ... other options you like
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  ...pwaConfig,
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',            
      },
      {
        protocol: 'https',
        hostname: 'bestnaturalcbd.com.co',            
      },
      {
        protocol: 'https',
        hostname: '*.ivoolve.cloud',            
      },
      {
        protocol: 'https',
        hostname: '*.evolve.dev.programandoweb.net',            
      },          
      {
        protocol: 'https',
        hostname: 'programandoweb.net',            
      }, 
      {
        protocol: 'https',
        hostname: '**',
        port: '',
        pathname: '**',            
      },                  
    ],
  },
};

export default nextConfig;
