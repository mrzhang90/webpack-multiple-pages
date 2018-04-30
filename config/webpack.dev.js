const conf = require('./webpack.conf');
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const dirVars=require('./dir-vars.config.js')
//这是我自己写的插件
const htmlAfterWebpackPlugin = require('./htmlAfterWebpackPlugin');
const getFiles=require('./getHTMLPlugin.js');
const htmlFiles = getFiles(dirVars.HTML_PATH).htmlFiles;
const plugins=[];
plugins.push(
		new ExtractTextPlugin("styles/[name].[hash:5].css"),
		/* 抽取出所有通用的部分 */
		new webpack.optimize.CommonsChunkPlugin({
			name: 'commons',      // 需要注意的是，chunk的name不能相同！！！
			filename: 'scripts/commons/[name].[hash:5].js',
			minChunks: 3,//被4个页面加载的js模块，会被纳入公共模块，建议3-5个
			//chunks://表示哪些chunk,可以理解为webpakc在入口的每一项中匹配来进行打包，默认提取所有chunk
		}),
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
			'window.jQuery': 'jquery',
			'window.$': 'jquery'
		}),
		//scope hoisting-作用域提升-webpack3新增
		// new webpack.optimize.ModuleConcatenationPlugin(),
		// new webpack.DllReferencePlugin({
		//   context: dirVars.ROOT_PATH, // 指定一个路径作为上下文环境，需要与DllPlugin的context参数保持一致，建议统一设置为项目根目录
		//   manifest: require('../manifest.json'), // 指定manifest.json
		//   name: 'dll'  // 当前Dll的所有内容都会存放在这个参数指定变量名的一个全局变量下，注意与DllPlugin的name参数保持一致
		// }),
		// new HtmlWebpackPlugin({
		// 	filename: '../views/index.html',//要去生成的文件
		// 	template:'src/web/views/index/pages/index.html',//原始的要去读的文件
		// 	inject:false//不要默认的把js插进来，我自定义 控制模板的顺序
		// }),
		// new HtmlWebpackPlugin({
		// 	filename: '../views/layout.html',//要去生成的文件
		// 	template:'src/web/views/common/pages/layout.html',//原始的要去读的文件
		// 	inject:false//不要默认的把js插进来，我自定义 控制模板的顺序
		// }),
		// new HtmlWebpackPlugin({
		// 	filename: '../widget/header.html',//要去生成的文件
		// 	template:'src/web/widget/myheader/header.html',//原始的要去读的文件
		// 	inject:false//不要默认的把js插进来，我自定义 控制模板的顺序
		// }),
		// new HtmlWebpackPlugin({
		// 	filename: '../widget/footer.html',//要去生成的文件
		// 	template:'src/web/widget/myfooter/footer.html',//原始的要去读的文件
		// 	inject:false//不要默认的把js插进来，我自定义 控制模板的顺序
		// }),
		// new HtmlWebpackPlugin({
		// 	filename: '../widget/content.html',//要去生成的文件
		// 	template:'src/web/widget/mycontent/content.html',//原始的要去读的文件
		// 	inject:false//不要默认的把js插进来，我自定义 控制模板的顺序
		// }),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'dev')
		})
		// new webpack.optimize.UglifyJsPlugin({
		// 	output: {
		// 		//最近凑的输出
		// 		beautify: false,
		// 		comments: false,
		//      	},
		//      	//额外的压缩选项
		//      	compress:{
		//       	//在UglifyJs删除没有用到的代码时不输出警告
		//       	warnings: true,
		//      		//通过true放弃对console.*功能的调用
		//      			//如果您希望在函数调用后删除特定的函数调用，
		//      			//例如console.info和/或保留副作用，则可以使用pure_funcs。
		// 		//还可以兼容ie浏览器
		//     			drop_console:true,
		//     			//内嵌定义了但是只用到了一次的变量
		//     			collapse_vars:true,
		//     			//提取出出现多次但是没有定义成变量去引用的静态值
		//     			reduce_vars:true
		//      	},
		//      	//使用源映射将错误消息位置映射到模块（这会降低编译速度）
		//      	sourceMap: false
		// })
)
for(let i=0,len=htmlFiles.length;i<len;i++){
	let _obj=htmlFiles[i]
	let filename=Object.keys(_obj)
	let filepath=_obj[filename]
	plugins.push(
		new HtmlWebpackPlugin({
			filename: path.join('../views/',filename[0]),//要去生成的文件
			template:filepath,//原始的要去读的文件
			// chunks: [ filename[0], 'commons'],
		    // hash: true, // 为静态资源生成hash值
		    // xhtml: true,
			inject:false//不要默认的把js插进来，我自定义 控制模板的顺序
		})
	)
}
plugins.push(
	new htmlAfterWebpackPlugin({})
)
const options = {
	output: {
		path: dirVars.OUTPUT_PATH,
		publicPath: '/',
		filename: 'scripts/[name].[hash:5].js'
	},
	plugins
}
const _options = Object.assign(conf.dev, options);
module.exports = _options;