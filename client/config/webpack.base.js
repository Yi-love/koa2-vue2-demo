'use strict';

const path = require('path');
const { cssLoaders } = require('./css.loader');

module.exports = function (dev) {
  return {
    entry: {
      main: './client/app/main.js',
      vendor: ['babel-polyfill' , 'vue' , 'vue-router' , 'vuex' , 'axios']
    },
    resolve:{
      extensions: ['.js' , '.vue' , '.json' , '.less' , '.scss' , '.sass'],
      alias: {
        'vue$': 'vue/dist/vue.esm.js'
      }
    },
    module: {
      rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',//代码检查，依赖.eslintrc
        enforce: 'pre',
        include: [path.join(__dirname , '../')],
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'//js编译，依赖于.babelrc
      },
      {
        test: /\.vue$/,
        include: [path.join(__dirname , '../')],
        loader: 'vue-loader',
        options: {
          extractCSS: true
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader'
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader'
      }
      ].concat(cssLoaders(dev))//css,less,sass,scss
    }
  };
};

