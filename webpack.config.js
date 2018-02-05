var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');

module.exports = {
	context: path.join(__dirname),
	devtool: debug ? "inline-sourcemap" : null,
	entry: "./src/js/router.js",
	module: {
		loaders: [
			{
				test: /\.js?$/,
				exclude: /(node_modules)/,
				loader: 'babel-loader',
				query: {
					presets: ["es2015",
						"react",
						"stage-0"]
				}
			}, //下面是添加的 css 的 loader，也即是 css 模块化的配置方法，大家可以拷贝过去直接使用
			//  模块的时候需要这样配置
			//loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader'
			}
		]
	},
	output: {
		path: __dirname,
		filename: "./src/bundle.js"
	},
	plugins: debug ? [] : [
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
	],
};