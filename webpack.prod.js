const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = merge(common, {
    mode: 'production',
    module: {
        rules: [{
            test: /\.(scss)$/,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
                {
    loader: 'postcss-loader', // Run post css actions
    options: {
      plugins: function () { // post css plugins, can be exported to postcss.config.js
        return [
          require('precss'),
          require('autoprefixer')
        ];
      }
    }
  },
                'sass-loader'
            ]
        }]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "bundle.css"
        })
    ],
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
});