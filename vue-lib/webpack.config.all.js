const path = require('path')
var glob = require('glob')
var fs = require('fs')
var ExtractTextPlugin = require("extract-text-webpack-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin')

const COMPONENTS_PATH = path.resolve(__dirname, './src/components')

function resolve(dir) {
    return path.join(__dirname, './', dir)
}

module.exports = {
    entry: "./src/js/jn.js",
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'jn.js',
        publicPath: '/',
        libraryTarget: 'umd',
        // libraryExport: 'default',
        library: "jn"
    },
    externals: {
        'vue': {
            commonjs: 'vue',
            commonjs2: 'vue',
            amd: 'vue',
            root: 'Vue'
        },
        'vee-validate':{
            commonjs: 'VeeValidate',
            commonjs2: 'VeeValidate',
            amd: 'VeeValidate',
            root: 'VeeValidate'
        }
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': resolve('src')
        }
    },
    module: {
        rules: [{
                test: /\.(js)$/,
                exclude: /(node_modules|bower_components)/,
                use: 'babel-loader'
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    extractCSS: true
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'fonts/[name].[hash:7].[ext]'
                }
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'media/[name].[hash:7].[ext]'
                }
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'img/[name].[hash:7].[ext]'
                }
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('./[name]/[name].css')
    ],
    devtool:'hidden-source-map'
}