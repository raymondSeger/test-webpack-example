var path = require('path');

module.exports = {
    context: path.resolve('js'),
    entry: ["./utils.js", "./app.js"],
    output: {
        path: path.resolve('js/build/'),
        filename: "bundle.js"
    },
    watch: true,

    module: {
        loaders: [{
            test: /\.es6/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    },

    resolve: {
        extensions: [ '.js', '.es6']
    }
}