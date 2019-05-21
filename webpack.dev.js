const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//獲取html-webpack-plugin
// new HtmlWebpackPlugin({
//             title: 'home page',
//             //使用模版
//             template: './src/view/index.html',
//             //產生出的位置檔案名字
//             filename:'view/index.html',
//             //將css放在head,js放在body底部
//             inject:true,
//             hash:true,
//             chunks  :['bootstrap','index']

//          })
const getHtmlConfig = function(name){
    return {
            template: './src/view/'+name+'.html',
            //產生出的位置檔案名字
            filename:'view/'+name+'.html',
            //將css放在head,js放在body底部
            inject:true,
            hash:true,
            chunks  :['bootstrap',name]
    };
}; 
module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    module: {
        rules: [{
            test: /\.(scss)$/,
            use: [
                'style-loader',
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
          new HtmlWebpackPlugin(getHtmlConfig('index'))
    ]
});