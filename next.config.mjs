import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Treat .md/.mdx files (e.g. app/blog/<slug>/page.mdx) as routable pages.
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

const withMDX = createMDX({
  // Add remark/rehype plugins here if desired.
});

export default withMDX(nextConfig);
