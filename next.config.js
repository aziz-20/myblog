/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    
}

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  // ...other configuration options...

  basePath: isProd ? '/myblog' : '',
  assetPrefix: isProd ? '/myblog/' : '',
};
// module.exports = nextConfig