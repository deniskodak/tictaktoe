const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { ModuleFederationPlugin } = require('webpack').container
const { dependencies } = require('./package.json')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'tictactoe.js',
        publicPath: 'https://deniskodak.github.io/tictaktoe/',
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.(jpg|png)$/,
                type: 'asset/resource',
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.hbs$/,
                use: ['handlebars-loader'],
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ['**/*'],
        }),
        new MiniCssExtractPlugin({
            filename: 'style.[contenthash].css',
        }),
        new HtmlWebpackPlugin({
            template: './src/template.hbs',
        }),
        new ModuleFederationPlugin({
            name: 'TicTacToeApp',
            filename: 'remoteEntry.js',
            exposes: {
                './TicTacToe': './src/App.jsx',
            },
            shared: {
                ...dependencies,
                react: {
                    requiredVersion: dependencies.react,
                    singleton: true,
                },
                "react-dom": {
                    singleton: true,
                    requiredVersion: dependencies["react-dom"],
                  },
            },
        }),
    ],
}
