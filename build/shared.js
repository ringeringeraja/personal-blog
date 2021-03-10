const path = require('path')
const webpack = require('webpack')

const { VueLoaderPlugin } = require('vue-loader')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = (mode, name = 'main') => ({
    mode,
    entry: path.resolve(__dirname, '../src'),
    output: {
        publicPath: '/',
        // filename:  `${name}.js`,
        path: path.resolve(__dirname, '../public')
    },
    resolve: {
        modules: [
            path.resolve(__dirname, '../node_modules'),
            path.resolve(__dirname, '../src')
        ],
        alias: {
            components: path.resolve(__dirname, '../src/components'),
            views: path.resolve(__dirname, '../src/views')
        },
        extensions: ['.js', '.json', '.vue']
    },
    module: {
        rules: [
            {
                test: /\.vue?$/,
                use: 'vue-loader',
            },
            {
                test: /\.css?$/,
                use: [
                    'vue-style-loader',
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            esModule: false,
                        }
                    },
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../static/index.html'),
            filename: path.resolve(__dirname, '../public/index.html'),
            inject: true,
        }),
        new MiniCssExtractPlugin({
            filename: `${name}.css`
        }),
    ],
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    externals: {}
})