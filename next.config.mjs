/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        loader: 'custom',
        loaderFile: './lib/bundler/image-loader.js',
    },
    output: 'export',
    distDir: 'out',
};

export default nextConfig;
