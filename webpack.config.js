var webpack = require('webpack');

module.exports = {
    entry: [
        './src/main.js'
    ],
    output: {
        path: "/dist/js",
        publicPath: "/dist/",
        filename: "app.js"
    },
    watch: true,
    module: {
        loaders: [
            {
                test: /\.js$/,
                // excluding some local linked packages.
                // for normal use cases only node_modules is needed.
                exclude: /node_modules|vue\/src|vue-router\//,
                loader: 'babel-loader',
                query: {
                    presets: ['env'],
                    plugins: ['transform-runtime']
                }
            },
        ]
    },
}