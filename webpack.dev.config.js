const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: [
    './src/index',
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.less$/,
        loaders: ['style-loader', 'css-loader', 'less-loader'],
      },
      {
        test: /(\.css)$/,
        loaders: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpe?g|png|gif|svg|ico|webp)$/i,
        loader: 'file?name=[name].[ext]',
      },
    ],
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: './src',
    historyApiFallback: true,
  },
}
