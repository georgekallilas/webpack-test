const path = require('path');
const SentryWebpackPlugin = require("@sentry/webpack-plugin");

module.exports = {
  entry: './src/script.js',
  output: {
    filename: 'main.js',
    sourceMapFilename: 'main.js.map',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'source-map',
  plugins: [
  new SentryWebpackPlugin({
      include: ".",
      ignoreFile: ".sentrycliignore",
      ignore: ["node_modules", "webpack.config.js"],
      configFile: "sentry.properties",
      release: "webpack-test@1.0.1"
  }) 
  ]
};