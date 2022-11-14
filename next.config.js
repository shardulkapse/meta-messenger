/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      "links.papareact.com",
      "encrypted-tbn0.gstatic.com",
      "scontent.fnag1-3.fna.fbcdn.net",
    ],
  },
  experimental: {
    appDir: true,
  },
};
