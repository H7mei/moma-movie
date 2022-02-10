module.exports = {
  images: {
    domains: ["links.papareact.com", "image.tmdb.org", "i.postimg.cc"],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: "@svgr/webpack",
    });
    return config;
  },
};
