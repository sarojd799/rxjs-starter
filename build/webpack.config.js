const path = require('path');
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const ROOT_DIR = path.resolve(__dirname, '../')
const BUILD_DIR = path.resolve(__dirname, ROOT_DIR, 'dist')
const APP_DIR = path.resolve(__dirname, ROOT_DIR, 'src')

const webpackConfig = {
    mode: process.env.NODE_ENV || 'development',
    entry: {
        app: ['./src/main.ts'],
        vendor: ['rxjs', 'axios']
    },
    output: {
        filename: '[name].[contenthash].js',
        path: BUILD_DIR,
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.(tsx|ts|js|jsx)$/, // rule for .js files        
                include: [APP_DIR],
                use: "babel-loader" // name of the loader   
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000 * 1024,
                            esModule: false
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: `${__dirname}/index.html`,
            scriptLoading: 'defer'
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
        })

    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx'],
        symlinks: false,
        modules: ['node_modules'],
    },
    devtool: 'inline-source-map',
    devServer: {
        watchContentBase: true,
        writeToDisk: true,
        host: 'localhost',
        port: '8000',
        contentBase: ROOT_DIR,
        open: true,
        serveIndex: true,//middleware generates directory listings on viewing directories that don't have an index.html file.
        overlay: true,// For overlay compilation errors
        compress: true//Enable gzip compression for everything served:
    }
}


module.exports = webpackConfig;
