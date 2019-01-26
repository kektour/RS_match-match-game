"use strict";

const path = require('path');

module.exports = {

    entry: './js/source/index.js',

    output: {
        filename: 'build.js',
        path: path.resolve(__dirname, 'js/build')
    },

    watch: true,

    devtool: 'inline-source-map',

    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['es2015']
                }
            }
        }]
    }
}
