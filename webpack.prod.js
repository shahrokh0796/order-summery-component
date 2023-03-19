const path = require("path");
const common = require("./webpack.common.js");
const { merge } = require("webpack-merge");

module.exports = merge(common, {
    mode: 'production',
    devtool: "source-map",
    output: {
        filename: "[hash].[contenthash].js",
        path: path.resolve(__dirname, "build"),
        assetModuleFilename: "images/[hash][ext][query]",
        clean: true,
    },
});