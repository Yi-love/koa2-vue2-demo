'use strict';

const path = require('path');
const webpack = require('webpack');

let codeComment = require('./code.comment');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

function generateLoaders (loader, loaderOptions , development) {
  var loaders = [{
    loader: 'css-loader',
    options: {
      minimize: development ? false : true,
      sourceMap: development ? true : false
    }
  }];

  if (loader) {
    loaders.push({
      loader: loader + '-loader',
      options: Object.assign({}, loaderOptions, {
        sourceMap: development ? true : false
      })
    });
  }
  return ExtractTextPlugin.extract({
    use: loaders,
    fallback: 'vue-style-loader'
  });
}

module.exports = function(development){
  return {
    entry:{
      main:'./client/app/main.js',
      vendor:['vue','vue-router']
    },
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        'vue$': 'vue/dist/vue.esm.js'
      },
      symlinks: false
    },
    resolveLoader:{
      modules: ['node_modules']
    },
    watch: development ? true : false,
    module:{
      rules:[
        {
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          enforce: 'pre',
          include: [path.join(__dirname, './client')],
          options: {
            formatter: require('eslint-friendly-formatter')
          }
        },
        {
          test:/\.js$/,
          exclude: /node_modules/,
          loader:'babel-loader'
        },
        {
          test:/\.vue$/,
          include: [path.join(__dirname, './client')],
          loader:'vue-loader',
          options: {
            loaders: {
              css: generateLoaders(undefined,undefined,development),
              postcss: generateLoaders(undefined,undefined,development),
              less: generateLoaders('less',undefined,development),
              sass: generateLoaders('sass', { indentedSyntax: true },development),
              scss: generateLoaders('sass',undefined,development),
              stylus: generateLoaders('stylus',undefined,development),
              styl: generateLoaders('stylus',undefined,development)
            }
          }
        }
      ]
    },
    output:{
      filename:'[name]' + (development ? '' : '-[hash]') + '.js',
      path:path.resolve(__dirname , 'static/dist'),
      publicPath:'/dist/'
    },
    devtool: '#source-map',
    plugins:[
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor'
      }),
      new HtmlWebpackPlugin({
        filename: './../../server/views/index.html',
        template: path.resolve(__dirname , 'server/views/index.template.html')
      }),
      new ExtractTextPlugin({
        filename:'[name]' + (development ? '' : '-[contenthash]') + '.css'
      }),
      development ? ()=> {} : 
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false,
          drop_console: true,
        }
      }),
      new webpack.BannerPlugin(codeComment.alpaca)
    ]
  };
};
