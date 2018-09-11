var webpack = require('webpack');
var path = require('path');
var htmlPlugin = require('html-webpack-plugin"');


module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },

};