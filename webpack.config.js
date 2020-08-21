const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: { main: './src/app/index.js' },
	output: {
		path : path.resolve(__dirname, './src/dist'),
		filename: 'app.js',
		publicPath: '/'
	},
	module: {
		rules : [
        {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env'],
                plugins: ['@babel/plugin-transform-runtime']
              }
            }
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        }
		]
	},
	plugins: [
    new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			inject: false,
			hash: true,
			template: './src/public/index.html',
			filename: 'index.html'
		})
  ],
  devServer: {
    publicPath: '/',
    contentBase: path.resolve(__dirname, './src/dist'),
    historyApiFallback: true,
    open: true,
    compress: true,
    hot: true,
    port: 3000,
  },
  devtool: 'source-map'
}