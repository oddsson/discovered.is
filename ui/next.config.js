const withSASS = require("@zeit/next-sass");

module.exports = withSASS({
  cssModules: true,
  target: "serverless",
  webpack: config => {
    const originalEntry = config.entry;

    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: "empty"
    };

    return config;
  }
});
