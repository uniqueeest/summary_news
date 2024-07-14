import withPWA from 'next-pwa';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['static2.finnhub.io', 'image.cnbcfm.com'],
  },
};

const withPWAConfig = withPWA({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
});

export default withPWAConfig(nextConfig);
