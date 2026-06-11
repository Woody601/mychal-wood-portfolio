/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
        pathname: "/v0/b/mychal-wood-portfolio.firebasestorage.app/o/**",
      },
    ],
  },
  sassOptions: {
    loadPaths: [process.cwd()],
    // Next.js injects this string at the top of every SCSS file
    additionalData: `@use "src/app/styles/abstract/_variables.scss" as *;`,
  },
};

export default nextConfig;
