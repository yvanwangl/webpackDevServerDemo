const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HTMLWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');

const debug = process.env.NODE_ENV!='production';

const commonPlugins = [
    new HtmlWebpackPlugin({
        template: path.join(__dirname, 'app', 'index.html'),
        alwaysWriteToDisk: true
    }),
    new HTMLWebpackHarddiskPlugin({
        outputPath: path.resolve(__dirname, '/dist')
    })
];

module.exports = {
    entry: path.join(__dirname, 'app', 'index.js'),
    output: {
        path: path.join(__dirname,'./dist'),
        filename: 'bundle.js',
        publicPath: '/dist'
    },
    devServer: {
        inline: true,
        hot: true,
        open: true,
        contentBase: '/dist',
        historyApiFallback: {
            index: 'index.html'
        }
    },
    module: {
        rules:[
            {
                test: /\.js$/,
                include: path.join(__dirname, 'app'),
                use: ['babel-loader']
            }
        ]
    },
    plugins: debug?[
        ...commonPlugins,
        new webpack.HotModuleReplacementPlugin()
    ]:[
        ...commonPlugins
    ]
};