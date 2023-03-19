const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: {
        index: "./src/index.js",
    },
    devtool: "inline-source-map",
    plugins: [
        new htmlWebpackPlugin({
            title: "Frontend Mentor | Order summary card",
            template: "./src/index.html",
            inject:true,
            scriptLoading: "defer",
        }),
        new MiniCssExtractPlugin(),
    ],

    output: {
        filename: "[hash].[contenthash].js",
        path: path.resolve(__dirname, "dist"),
        assetModuleFilename: "images/[hash][ext][query]",
        clean: true,
    },

    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader, 
                    "css-loader",
                    "sass-loader",
                    "postcss-loader",
                ],
            },
            {
                test: /\.(png|gpj|gpeg|gif|svg)$/i,
                type: "asset/resource",
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
                options: {
                    sources: true,
                }
            },
        ],
    },
    optimization: {
        runtimeChunk: "single",
        usedExports: true,
    },
};