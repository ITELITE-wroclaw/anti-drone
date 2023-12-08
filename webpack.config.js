
const PurgeCSSPlugin  = require("purgecss-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

const path = require("path");
const glob = require("glob");

const PATHS = {
    src: path.join(__dirname, "src"),
}; 

module.exports = {
    
    plugins: [
        new PurgeCSSPlugin({
          paths: glob.sync(`${PATHS.src}/**/*`, { nodir: true }),
        })
    ],

    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
    },
} 