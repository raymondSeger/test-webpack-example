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
                loader: 'style-loader!css-loader!autoprefixer-loader'
            },
            {
                test: /\.scss/,
                exclude: /node_modules/,
                loader: 'style-loader!css-loader!autoprefixer-loader!sass-loader'
            },
            {
                test: /\.(png|jpg|ttf|eot|otf|woff)$/,
                exclude: /node_modules/,
                loader: 'url-loader?limit=10000000'
            }
        ]
    },

    resolve: {
        extensions: [ '.js', '.es6']
    }
}