/* eslint-disable */
import webpack from 'webpack';
import path from 'path';

const CopyWebpackPlugin = require('copy-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

export default {
  debug: true,
  devtool: 'cheap-module-eval-source-map',
  noInfo: false,
  entry: [
    //'eventsource-polyfill', // necessary for hot reloading with IE
    'babel-polyfill',
    'webpack-hot-middleware/client?reload=true', //note that it reloads the page if hot module reloading fails.
    './src/index'
  ],
  target: 'web',
  output: {
    path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './src'
  },
  plugins: [
    new ManifestPlugin({
      fileName: 'asset-manifest.json'
    }),
    new webpack.ProvidePlugin({
      "React": "react",
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new CopyWebpackPlugin([
      // { from: 'src/robots.txt', to: 'robots.txt' },
      // { from: 'src/sitemap.xml', to: 'sitemap.xml' },
      // { from: 'src/service-worker.js', to: 'service-worker.js' },
      { from: 'src/manifest.json', to: 'manifest.json' },

      // { from: 'src/js/picturefill.js', to: 'picturefill.js'},
      // { from: 'src/js/pf.mutation.min.js', to: 'pf.mutation.min.js'}
    ], {
      copyUnmodified: true
    })
  ],
  externals: [{
    xmlhttprequest: '{XMLHttpRequest:XMLHttpRequest}'
  }],
  module: {
    loaders: [
      {test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel']},
      {test: /(\.css)$/, loaders: ['style', 'css']},
      {test: /\.(jpe?g|png|gif|svg|ico|webp)$/i, include: path.join(__dirname, 'src/assets'), loader: 'file?name=[name].[ext]'},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
      {test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000'},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
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
