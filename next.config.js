/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    loadPaths: [process.cwd()],
    // Next.js injects this string at the top of every SCSS file
    additionalData: `@use "src/app/styles/abstract/_variables.scss" as *;`,
  },
};

export default nextConfig;
