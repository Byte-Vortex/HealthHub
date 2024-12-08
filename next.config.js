const nextConfig = {
  images: {
    domains: ['images.unsplash.com'], // Add 'images.unsplash.com' to the list of allowed domains
  },
  env: {
    NEXTAUTH_URL: "http://localhost:3000",
  },
};

module.exports = nextConfig;
