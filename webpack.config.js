const path = require('path');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
        },
        {
            test: /\.s[ac]ss$/i,
            use: [
              // Creates `style` nodes from JS strings
              'style-loader',
              // Translates CSS into CommonJS
              'css-loader',
              // Compiles Sass to CSS
              'sass-loader',
            ],
        },
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: ['@babel/plugin-proposal-object-rest-spread']
            }
          }
        }
      ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlwebpackPlugin({
      title: 'Rxjs',
      filename: 'index.html',
      template: './src/public/index.html'
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