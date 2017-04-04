const htmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const autoprefixer = require('autoprefixer');

// const ExtractCss = new ExtractTextPlugin('style/[name]_[hash:8].css');
// const ExtractLess = new ExtractTextPlugin('style/[name]_[hash:8].css');

module.exports = {
	entry: {
		index: './src/js/index.js',
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		publicPath: 'file:///H:/GitHub/webpack2/demo01/dist/',
		filename: 'js/[name].js'
	},
	module: {
		rules: [
			{
				test: /\.html$/,
				use: [
					{loader: 'html-loader'}
				]
				
			},
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
		          	fallback: "style-loader",
		          	use: [
						{
							loader: 'css-loader'
						},
						{
							loader: 'postcss-loader',
							options: {
								plugins: function(){
									return [
										autoprefixer({
											broswers: ['last 5 versions']
										})
									];
								}
							}
						}
					]
		        })			
			},
			{
				test: /\.less$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
						{
							loader: 'css-loader',
						},
						{
							loader: 'postcss-loader',
							options: {
								plugins: function(){
									return[
										autoprefixer({
											broswers: ['> 5%']
										})
									]
								}
							}
						},
						{
							loader: 'less-loader'
						}
					]
				})
			},
			{
				test: /\.js$/,
		        loader: 'babel-loader',
				include: /src\/js/,
		        options: {
		          presets: ['env']
		        }
			},
			{
				test: /\.(png|jpg|gif)/i,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 200,
							name: 'img/[name]_[hash:8].[ext]'
						}
					},
					{
						loader: 'image-webpack-loader',
						options: {
							progressive: true,
					        pngquant: {
					            quality: '65-90',
					            speed: 4
					        }
						}
					}
				]
				
			}
		]
	},
	plugins: [
		new htmlWebpackPlugin({
			filename: 'index.html',
			template: 'index.html',
			inject: 'body',
			title: 'My Webpack App'
		}),
		new ExtractTextPlugin('style/[name]_[hash:8].css')
	]
}