import { PHASE_DEVELOPMENT_SERVER } from "next/constants.js";
/** @type {import('next').NextConfig} */
const nextConfig = (phase) => ({
  // Keep production builds from replacing chunks used by the running dev server.
  distDir: phase === PHASE_DEVELOPMENT_SERVER ? ".next" : ".next-build",
  sassOptions: {
    loadPaths: [process.cwd()],
    // Next.js injects this string at the top of every SCSS file
    additionalData: `@use "src/app/styles/abstract/_variables.scss" as *;`,
  },
});

export default nextConfig;
