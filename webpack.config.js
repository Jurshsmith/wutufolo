const path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        }
      ]
  },
  plugins: [
    new HtmlwebpackPlugin({
      title: 'Rxjs',
      filename: 'index.html'
    }),
  ],
    // for the dev server
    devServer: {
        // Necessary for React routing
        historyApiFallback: true,
        // Proxy API in dev mode to different port.
        proxy: {
            '/api': 'http://localhost:5000',
        },
        open: true,
        compress: true,
        hot: true,
        port: 3000,
    },
};