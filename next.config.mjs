/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        loader: 'custom',
        loaderFile: './lib/deploy/image-loader.js',
    },
    output: 'export',
    distDir: 'out',
};

export default nextConfig;
