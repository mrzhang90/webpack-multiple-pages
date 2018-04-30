const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const dirVars=require('./dir-vars.config.js')

// const vendors = [
  // 'antd',
  // 'isomorphic-fetch',
  // 'react',
  // 'react-dom',
  // 'react-redux',
  // 'react-router',
  // 'redux',
  // 'redux-promise-middleware',
  // 'redux-thunk',
  // 'superagent',
// ];
const trip_calendar=dirVars.TRIP;//trip_calendar这个变量名决定了output的文件名
module.exports = {
  output: {
    path: path.join(__dirname,'../build/assets/scripts'),
    filename: '[name].js',
  },
  entry: {
     trip_calendar
  },
  module: {
    rules: [{
      test:/\.css$/,
      loader:ExtractTextPlugin.extract({
          fallback:"style-loader",
          use:"css-loader!postcss-loader"
      })
      }
      // ,
      // {
      //   test: require.resolve('jquery'),  // 此loader配置项的目标是NPM中的jquery
      //   loader: 'expose-loader?$!expose-loader?jQuery', // 先把jQuery对象声明成为全局变量`jQuery`，再通过管道进一步又声明成为全局变量`$`
      // }
    ]
  },
  plugins: [
    new webpack.DllPlugin({
      path: 'manifest.json',
      name: '[name]_[chunkhash]',//是dll暴露的对象名，要跟output.library保持一致
      context: dirVars.ROOT_PATH,//是解析包路径的上下文，这个要跟接下来配置的dll user一致
    }),
    new ExtractTextPlugin('../styles/[name].css'), // 打包css/less的时候会用到ExtractTextPlugin
  ],
};