var path = require('path');

module.exports = {
    mode: 'production',
    entry: './lib/dubium.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'dubium.min.js',
        library: 'dubium',
        libraryTarget: 'var'
    },
    module: {
        rules: [{
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: [
                        ["minify"],
                        [
                            "@babel/env",
                            {
                                targets: {
                                    edge: "15",
                                    firefox: "50",
                                    chrome: "50",
                                    safari: "8",
                                    ie: "10"
                                },
                                useBuiltIns: "entry",
                            },
                        ],
                    ],
                }
            }
        }]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map',
    resolve: {
        mainFields: ['browser', 'main']
    }
};