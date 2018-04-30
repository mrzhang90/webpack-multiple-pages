const webpack = require('webpack');
const fs = require('fs');
const _ = require('lodash');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const dirVars=require('./dir-vars.config.js')
// require("url-loader?name=scripts/[name].[ext]!"+path.join(__dirname,'../src/web/assets/js/trip-calendar.js'))
//处理所有的js入口文件
const jsEntris = {};
fs.readdirSync(dirVars.ENTRIE_PATH).map((o, filename) => {
    const _fd = path.join(dirVars.ENTRIE_PATH, o);
    fs.readdirSync(_fd).map((innero, ifile) => {
        if (/.entry.js$/.test(innero)) {
            jsEntris[innero.replace(".entry.js", "")] = path.join(_fd, innero)
        }
    })
})
// 1.入口文件指定OK
// 2.loaders配置OK
// 3.公用的模块
const _entries = Object.assign(jsEntris);
const _modules = {
    rules: [{
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
            "presets": [
                ['env', {
                    'modules': false //很重要,这样设置后，webpack执行删除无用代码、优化代码都才会生效
                }]
            ]
        }
    },{
        test:/\.css$/,
        loader:ExtractTextPlugin.extract({
            fallback:"style-loader",
            use:"css-loader!postcss-loader"
        })
    },{
        test:/\.html$/,
        exclude: /node_modules/,
        loader: "html-loader"
    },
    {
        test: /\.(htc)$/,
        loader: 'url-loader?limit=1024&name=styles/[name].[ext]'
    },
    {
      test: require.resolve('jquery'),  // 此loader配置项的目标是NPM中的jquery
      loader: 'expose-loader?$!expose-loader?jQuery', // 先把jQuery对象声明成为全局变量`jQuery`，再通过管道进一步又声明成为全局变量`$`
    }
    ]
}
const _resolve = {
    extensions: [".js", ".css"]
}
const imgloader = {
    test: /\.(png|jpg|gif)$/,
    loader: 'url-loader?limit=1024&name=images/[name].[hash:5].[ext]'
};
const fontloader = {
    test: /\.(woff|woff2|svg|eot|ttf)\??.*$/,
    loader: 'url-loader?limit=1024&name=fonts/[name].[hash:5].[ext]'
};
const imgloader_prod = {
    test: /\.(png|jpg|gif)$/,
    loader: 'url-loader?limit=1024&name=images/[name].[hash:5].[ext]'
};
const fontloader_prod = {
    test: /\.(woff|woff2|svg|eot|ttf)\??.*$/,
    loader: 'url-loader?limit=1024&name=fonts/[name].[hash:5].[ext]'
};
let _devLoaders = _.clone(_modules.rules);
let _prodLoaders = _.clone(_modules.rules);
_devLoaders.push(imgloader);
_devLoaders.push(fontloader);
_prodLoaders.push(imgloader_prod);
_prodLoaders.push(fontloader_prod);
const WebpackConfig = {
    dev: {
        entry: _entries,
        module: {
            rules: _devLoaders
        },
        resolve: _resolve
    },
    prod: {
        entry: _entries,
        module: {
            rules: _prodLoaders
        },
        resolve: _resolve
    }
};
module.exports = WebpackConfig;