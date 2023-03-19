const path = require("path");
const common = require("./webpack.common.js");
const { merge } = require("webpack-merge");

module.exports = merge(common, {
    mode: 'development',
    devtool: "inline-source-map",

    output: {
        filename: "[name].bundle.js.js",
        path: path.resolve(__dirname, "dist"),
        assetModuleFilename: "images/[hash][ext][query]",
        clean: true,
    },
});