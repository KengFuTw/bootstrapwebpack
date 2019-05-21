const path = require('path');
const webpack = require('webpack');
//設置HtmlWebpackPlugin
const HtmlWebpackPlugin = require('html-webpack-plugin');
//清理/dist文件夾
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {  
  mode: 'development',
  entry: './src/js/index.js',

  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
  test: /\.(scss)$/,
  use: [{
    loader: 'style-loader', // inject CSS to page
  }, {
    loader: 'css-loader', // translates CSS into CommonJS modules
  }, {
    loader: 'postcss-loader', // Run post css actions
    options: {
      plugins: function () { // post css plugins, can be exported to postcss.config.js
        return [
          require('precss'),
          require('autoprefixer')
        ];
      }
    }
  }, {
    loader: 'sass-loader' // compiles Sass to CSS
  }]
},
// 加載圖片
    {
      test: /\.(png|svg|jpg|gif)$/,
      use: [
        'file-loader'
      ]
    },
    //加載字體
    {
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: [
        'file-loader'
      ]
    }
    ]
  },
  //使用source maps
  devtool: 'inline-source-map',
  //使用webpack-dev-server
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    // 設置HtmlWebpackPlugin
    new HtmlWebpackPlugin({
      title: 'Output Management'
    }),
    //清理/dist文件夾
    new CleanWebpackPlugin(),
    new webpack.ProvidePlugin({
      // _: 'lodash',
      $: 'jquery',
      jQuery: 'jquery',
      Popper: ['popper.js', 'default']
    })
  ]
};