'use strict';

const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin'); 

const webpackBase = require('./webpack.base')(true);

const webpackDev = {
  watch: true,
  watchOptions: {
    ignored: /node_modules/
  },
  output:{
    filename: '[name].js?v=[hash]',
    path: path.resolve(__dirname , '../../static/dist'),
    publicPath: '/dist/'
  },
  devtool: '#source-map',
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
      filename: '[name].css?v=[contenthash]'
    }),
    new webpack.NoEmitOnErrorsPlugin() //webpack编译error
  ]
};

module.exports = merge(webpackBase , webpackDev);