var path = require('path');

module.exports = {
    context: path.resolve('js'),
    entry: ["./utils", "./app"],
    output: {
        path: path.resolve('js/build/'),
        filename: "bundle.js"
    },
    watch: true,

    module: {
        loaders: [
            {
                test: /\.es6/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css/,
                exclude: /node_modules/,
                loader: 'style-loader!css-loader'
            }
        ]
    },

    resolve: {
        extensions: [ '.js', '.es6']
    }
}