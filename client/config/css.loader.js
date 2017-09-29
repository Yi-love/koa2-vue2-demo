'use strict';

const ExtractTextPlugin = require('extract-text-webpack-plugin');

/**
 * [generateLoaders 获取css,scss,less等loader]
 * @param  {[type]} loader [description]
 * @param  {[type]} dev    [description]
 * @return {[type]}        [description]
 */
function generateLoaders(loader , dev) {
  let loaders = [{
    loader: 'css-loader',
    options: {
      minimize: dev ? false : true,
      sourceMap: dev ? true : false
    }
  }];

  if ( loader && loader !== 'css' ){
    let loaderOptions = loader === 'sass' ? { indentedSyntax: true } : {};
    loader = loader === 'scss' ? 'sass' : loader;//sass和scss使用相同的loader

    loaders.push({
      loader: loader + '-loader',
      options: Object.assign({} , loaderOptions , {sourceMap: dev ? true : false})
    });
  }

  return ExtractTextPlugin.extract({//提取为外部公共文件
    use: loaders,
    fallback: 'style-loader'
  });
}
/**
 * [getLoaders 获取css等loader数组]
 * @param  {Array}  array [description]
 * @param  {[type]} dev   [description]
 * @return {[type]}       [description]
 */
function getLoaders(array = ['css'] , dev){
  let loaders = [];
  for (let i = 0 ; i < array.length ; i++){
    loaders.push({
      test: new RegExp('\\.' + array[i] + '$'),//对不同的文件使用不同的loader
      use: generateLoaders(array[i] , dev)
    });
  }

  return loaders;
}
/**
 * [cssLoders 外部方法]
 * @param  {[type]} dev [description]
 * @return {[type]}     [description]
 */
exports.cssLoaders = function(dev){
  return getLoaders(['css' , 'scss' , 'sass' , 'less'] , dev);
};

