const path = require('path');
const webpack = require("webpack");


module.exports = {
    entry: {
        index:'./src/page/index.js',
        bootstrap: './src/bootsrap/bootstrap.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            Util: 'exports-loader?Util!bootstrap/js/dist/util'
        }),
          // new HtmlWebpackPlugin(getHtmlConfig('index'))
    ]
};