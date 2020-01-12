const withSASS = require("@zeit/next-sass");

module.exports = withSASS({
  cssModules: true,
  target: "serverless",
  webpack: config => {
    const originalEntry = config.entry

    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: "empty"
    };

    config.entry = async () => {
      const entries = await originalEntry()

      if (
        entries['main.js'] &&
        !entries['main.js'].includes('./utils/polyfills.js')
      ) {
        entries['main.js'].unshift('./utils/polyfills.js')
      }

      return entries
    }

    return config;
  }
});
