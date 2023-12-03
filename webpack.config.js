
const path = require('path');
const Dotenv = require('dotenv-webpack');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true, // available in version > v5.20
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, ''),
        },
        port: 3002,
        open: true,
        hot: true,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg|svg|gif)$/,
                type: 'asset/resource'
            },
            {
                test: /\.(js|jsx)$/, // .js and .jsx files
                exclude: /node_modules/, // excluding the node_modules folder
                use: {
                  loader: "babel-loader",
                },
            },
            {
                test: /\.(sa|sc|c)ss$/, // styles files
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            // {
            //     test: /\.(png|woff|woff2|eot|ttf|svg)$/, // to import images and fonts
            //     loader: "url-loader",
            //     options: { limit: false },
            // },
        ],
    },
    plugins: [
        // new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            // title: 'Sweetest Home',
            // filename: 'App.html',
            template: './src/index.html'
        }),
        new Dotenv(),
    ]
}