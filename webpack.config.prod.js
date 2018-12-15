/* eslint-disable */
import webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin");
const ManifestPlugin = require('webpack-manifest-plugin');

export default {
  devtool: 'source-map',
  noInfo: false,
  entry: [
    './src/index'
  ],
  target: 'web',
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {NODE_ENV: '"production"'}
    }),
    // new BundleAnalyzerPlugin(),
    new webpack.ProvidePlugin({
      "React": "react",
    }),
    new ManifestPlugin({
      fileName: 'asset-manifest.json'
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new ExtractTextPlugin('styles.css'),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        screw_ie8: true,
        drop_console: true
      },
      output: {
        comments: false,
      },
      exclude: [/\.min\.js$/gi]
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new CopyWebpackPlugin([
      // { from: 'src/robots.txt', to: 'robots.txt' },
      // { from: 'src/sitemap.xml', to: 'sitemap.xml' },
      // { from: 'src/service-worker.js', to: 'service-worker.js' },
      { from: 'src/manifest.json', to: 'manifest.json' }
    ], {
      copyUnmodified: true
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, [/moment$/]),
    new CompressionPlugin({
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0
    })
  ],
  externals: [{
    xmlhttprequest: '{XMLHttpRequest:XMLHttpRequest}'
  }],
  module: {
    loaders: [
      {test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel']},
      {test: /(\.css)$/, loader: ExtractTextPlugin.extract("css?sourceMap")},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
      {test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000'},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
      {test: /\.(jpe?g|png|gif|svg|webp)$/i, loader: "url?limit=10000"},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'},
      {
        test: /favicon\.ico$/,
        loader: 'url',
        query: {
          limit: 1,
          name: '[name].[ext]',
        },
      },
      {
        test: /\.html$/,
        loader: 'html-loader?attrs[]=video:src'
      }, {
        test: /\.mp4$/,
        loader: 'url?limit=10000&mimetype=video/mp4'
      }
    ]
  }
};
