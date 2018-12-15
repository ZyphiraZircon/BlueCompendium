const webpack = require('webpack');
const path = require('path');
const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
  entry: [
    './src/index',
  ],
  target: 'web',
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
  plugins: [
    new ManifestPlugin({
      fileName: 'asset-manifest.json',
    }),
  ],
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
