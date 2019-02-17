const path = require('path')
const glob = require('glob')
const fs = require('fs')
const webpack = require('webpack')

var ExtractTextPlugin = require("extract-text-webpack-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin')

function resolve(dir) {
    return path.join(__dirname, './', dir)
}

module.exports = {
    entry: './main.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: './[name].js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': resolve('src'),
        }
    },
    module: {
        rules: [{
            test: /\.(js)$/,
            exclude: /(node_modules|bower_components)/,
            use: ['babel-loader', 'source-map-loader'],
            enforce: 'pre'
        },
        {
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {
                extractCSS: true,
                postcss: [require('autoprefixer')({
                    browsers: [
                        "> 1%",
                        "last 10 versions",
                        "ie 9"
                    ]
                })]
            }
        },
        {
            test: /\.scss$/,
            use: ['css-loader', 'sass-loader']
        },
        {
            test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: 'static/fonts/[name].[ext]'
                }
            }]
        },
        {
            test: /\.(png|jpg|gif)$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: 'static/images/[name].[ext]'
                    }
                }
            ]
        }
        ]
    },
    plugins: [
        new ExtractTextPlugin('./[name].css'),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        hot: true,
        progress: true,
        port: 9000,
        openPage: 'index.html'
    }
}