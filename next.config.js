/** @type {import('next').NextConfig} */
module.exports = {
  exportTrailingSlash: true,
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/night-of-glory/",
        destination: "/night-of-glory/index.html",
        permanent: true,
      },
    ];
  },
};
