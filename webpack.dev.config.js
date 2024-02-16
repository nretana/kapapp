const webpack = require('webpack');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DotenvWebpackPlugin = require('dotenv-webpack');
const hotMiddlewareScript = 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true';

module.exports = {
    entry: {
        home: ['./src/pages/HomePage.js', hotMiddlewareScript],
        kap: ['./src/pages/KapPage.js', hotMiddlewareScript],
        notfound: ['./src/pages/NotFoundPage.js', hotMiddlewareScript]
    },
    output: {
        filename: "assets/js/[name].js",
        path: path.resolve(__dirname, "dist"),
        publicPath: '/static/',
        clean: true
    },
    mode: 'development',
    devtool: 'source-map',
    target: 'web',
    devServer: {
        hot: true,
        devMiddleware: {
            writeToDisk: true
        }
    },
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.(png|jpg|svg)$/,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 4*1024
                    }
                },
                generator: {
                    filename: 'assets/imgs/[name][ext]'
                }
            },
            {
                test: /\.(woff|woff2)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/fonts/[name].[ext]'
                }
            },
            {
                test: /\.scss$/,
                use: [
                        {
                            loader: 'style-loader'
                        }, 
                        {
                            loader: 'css-loader'
                        }, 
                        {
                            loader: 'postcss-loader',
                            options: {
                                postcssOptions: {
                                    plugins: () => [
                                        require('autoprefixer')
                                    ]
                                }
                            }
                        }, 
                        { 
                            loader:'sass-loader'
                        }
                    ]
            },
            { //rule for js file 
                test: /\.js$/,
                exclude: [/node_modules/], //exclude folder
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', ['@babel/preset-react', {"runtime": "automatic"}]],
                        plugins: ['@babel/plugin-syntax-dynamic-import', '@babel/plugin-syntax-import-assertions']
                    }
                }
            }
        ]
    },

    plugins: [
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new DotenvWebpackPlugin({
            path: './src/.env.dev'
        }),
        new HtmlWebpackPlugin({
            template: 'src/pages/home.html',
            filename: 'home.html',
            chunks: ['home']
        }),
        new HtmlWebpackPlugin({
            template: 'src/pages/kap.html',
            filename: 'kap.html',
            chunks: ['kap']
        }),
        new HtmlWebpackPlugin({
            template: 'src/pages/notfound.html',
            filename: 'notfound.html',
            chunks: ['notfound']
        })
    ]
}