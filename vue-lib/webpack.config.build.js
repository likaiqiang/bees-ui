const path = require('path')
var glob = require('glob')
var fs = require('fs')
var ExtractTextPlugin = require("extract-text-webpack-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin')

const COMPONENTS_PATH = path.resolve(__dirname, './src/components')

function resolve(dir) {
    return path.join(__dirname, './', dir)
}
function firstUpperCase(str) {
    return str.toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toUpperCase());
}
var entries = function () {
    var directoryPaths = glob.sync('./src/components/*')
    var components = {}
    directoryPaths.forEach(item => {
        var stat = fs.statSync(item)
        if (stat.isDirectory()) {
            var componentName = path.parse(item).name
            var entryPath = path.resolve(item, './index.js')
            components[componentName] = entryPath
        }
    })
    return components
}

module.exports = {
    entry: entries(),
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: './[name]/[name].js',
        publicPath: '/',
        libraryTarget: 'umd',
        // libraryExport: 'default',
        library: ["jn", "[name]"]
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
        },
        'reqwest':{
            commonjs: 'reqwest',
            commonjs2: 'reqwest',
            amd: 'reqwest',
            root: 'reqwest'
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
                use:[{
                    loader:'file-loader',
                    options:{
                        name: 'static/fonts/[name].[ext]'
                    }  
                }]
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('./[name]/[name].css')
    ],
    devtool:'hidden-source-map'
}