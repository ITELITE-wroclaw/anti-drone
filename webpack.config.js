import whitelister from 'purgecss-whitelister';
import PurgeCSSPlugin from 'purgecss-webpack-plugin/lib/purgecss-webpack-plugin';

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