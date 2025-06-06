/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const isGitHubPages = process.env.GITHUB_PAGES === 'true'

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  
  // GitHub Pages用の設定（本番環境かつGitHub Pagesの場合のみ）
  ...(isProd && isGitHubPages && {
    output: 'export',
    trailingSlash: true,
    skipTrailingSlashRedirect: true,
    basePath: '/karitorumosya',
    assetPrefix: '/karitorumosya/',
  }),
  
  images: {
    unoptimized: isProd && isGitHubPages,
  },
}

module.exports = nextConfig 