const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DotenvWebpackPlugin = require('dotenv-webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ImageMinimizerWebpackPlugin = require('image-minimizer-webpack-plugin');

module.exports = {
    entry: {
        home: './src/pages/HomePage.js',
        kap: './src/pages/KapPage.js',
        notfound: './src/pages/NotFoundPage.js'
    },
    output: {
        filename: "assets/js/[name].[contenthash].js",
        //assetModuleFilename: 'assets/imgs/[name].[contenthash][ext]',
        path: path.resolve(__dirname, "dist"),
        publicPath: '/static/',
        clean: true
    },
    mode: 'production',
    //devtool: 'inline-source-map',
    optimization: {
        splitChunks: {
            chunks: 'all',
            minSize: 1000
        },
        minimizer: [
            new ImageMinimizerWebpackPlugin({
                minimizer: {
                    implementation: ImageMinimizerWebpackPlugin.imageminMinify,
                    options: {
                        plugins: [
                            ["jpegtran", { progressive: true }],
                            ["optipng", { optimizationLevel: 5 }]
                        ]
                    }
                }
            })
        ]
    },
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.(png|jpe?g|svg)$/,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 4*1024 //allows max of 4kb for asset/inline
                    }
                },
                generator: {
                    filename: 'assets/imgs/[name].[contenthash][ext]'
                }
            },
            {
                test: /\.(woff|woff2)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/fonts/[name].[contenthash][ext]'
                }
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            /*options: {
                                modules: true,
                            }*/
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
                exclude: /node_modules/, //exclude folder
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', ['@babel/preset-react', {"runtime": "automatic"}]]
                    }
                }
            },
        ]
    },

    plugins: [
        new CleanWebpackPlugin(),
        new DotenvWebpackPlugin({
            path: './src/.env.prod'
        }),
        new MiniCssExtractPlugin({
            filename: 'assets/css/[name].[contenthash].css'
        }),
        new HtmlWebpackPlugin({
            template: 'src/pages/home.html',
            filename: 'home.html',
            minify: false,
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