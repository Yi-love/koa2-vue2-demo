'use strict';

const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin'); 
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const webpackBase = require('./webpack.base')();
let codeComment = require('./code.comment');

const webpackProd = {
  output:{
    filename: '[name]-[hash].js',
    path: path.resolve(__dirname , '../../static/dist'),
    publicPath: '/dist/'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({ //js
      name: 'vendor'
    }),
    new HtmlWebpackPlugin({ //html
      inject: true,
      filename: './../../server/views/index.html',
      template: path.resolve(__dirname , './../app/views/index.html')
    }),
    new ExtractTextPlugin({ //css
      filename: '[name]-[contenthash].css'
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: true
      }
    }),
    new OptimizeCssAssetsPlugin(),//压缩css
    new webpack.BannerPlugin(codeComment.alpaca),
    new webpack.NoEmitOnErrorsPlugin() //webpack编译error
  ]
};

module.exports = merge(webpackBase , webpackProd);