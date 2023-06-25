const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { ModuleFederationPlugin } = require('webpack').container
const { dependencies } = require('./package.json')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'tictactoe.js',
        publicPath: 'http://localhost:9000/',
    },
    mode: 'development',
    devServer: {
        port: 9000,
        static: {
            directory: path.resolve(__dirname, './dist'),
        },
        devMiddleware: {
            index: 'button.html',
            writeToDisk: true,
        },
    },
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
                use: ['style-loader', 'css-loader', 'sass-loader'],
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
        new HtmlWebpackPlugin({
            template: './src/template.hbs',
            minify: false,
        }),
        new ModuleFederationPlugin({
            name: 'TicTacToeApp',
            filename: 'remoteEntry.js',
            exposes: {
                './TicTacToe': './src/App.jsx',
            },
            shared: {
                // adds react as shared module
                react: {
                    requiredVersion: dependencies.react,
                    singleton: true,
                },
            },
        }),
    ],
}
