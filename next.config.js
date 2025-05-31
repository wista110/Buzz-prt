/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  
  // GitHub Pages用の設定
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  
  // GitHub Pagesのサブパス対応
  basePath: '/karitorumosya',
  assetPrefix: '/karitorumosya/',
  
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig 