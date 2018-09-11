const path = require('path');
const argv = require('yargs').argv;
const isDevelopment = argv.mode === 'development';
const isProduction = !isDevelopment;
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const distPath = path.join(__dirname, '/build');

const extractSass = new ExtractTextPlugin({
    filename: '[name].css',
    disable: isDevelopment
});
const htmlWebpack = new HtmlWebpackPlugin({
    template: './src/index.html',
});

const config = {
    entry: { main: './src/app.js' },
    output: {
        path: distPath,
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: extractSass.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                minimize: isProduction
                            }
                        },
                        'resolve-url-loader',
                        'sass-loader'
                    ]
                })
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            minimize: isProduction
                        }
                    }
                ],
            },
        ]
    },
    plugins: [
        extractSass,
        htmlWebpack
    ],

    devServer: {
        contentBase: distPath,
        port: 8080,
        compress: true,
        open: true
    },

    devtool: 'inline-source-map'
};

module.exports = config;
