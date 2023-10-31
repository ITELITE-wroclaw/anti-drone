const whitelister = require('purgecss-whitelister');
const { PurgeCSSPlugin } = require('purgecss-webpack-plugin');

const glob = require("glob");

module.exports = {

  plugins: [
    new PurgeCSSPlugin({
      keyframes: false,
      paths: glob.sync('src/**/*', {
        nodir: true
      }),
      whitelist: whitelister('bootstrap/dist/css/bootstrap.css')
    }),
  ],
}