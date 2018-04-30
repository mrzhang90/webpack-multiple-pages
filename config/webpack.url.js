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
    // 入口文件路径，__dirname是根目录  
    entry: trip_calendar,  
    // 打包生成文件  
    output: {
        path: dirVars.OUTPUT_PATH,
        publicPath: '/',
        filename: 'null.js'  
    },  
  
    module: {  
        rules: [  
            {  
                test: /\.css$/,  
                use: 'url-loader?limit=1024&name=[name].[ext]&outputPath=styles/', 
            },  
            {  
                test: /\.js$/,  
                use: 'url-loader?limit=1024&name=[name].[ext]&outputPath=scripts/',  
            }  
        ]  
    },
} 