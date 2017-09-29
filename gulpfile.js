'use strict';
const gulp = require('gulp');
const gutil = require('gulp-util');
const del = require('del');
const webpack = require('webpack');
const exec = require('child_process').exec;
const runSequence = require('run-sequence');

const webpackDev = require('./client/config/webpack.dev');
const webpackProd = require('./client/config/webpack.prod');

/**
 * [defaultStatsOptions gulp染色配置]
 * @type {Object}
 */
let defaultStatsOptions = {
    colors: gutil.colors.supportsColor,
    hash: true,
    timings: true,
    chunks: false,
    chunkModules: false,
    modules: false,
    children: true,
    version: true,
    cached: false,
    cachedAssets: false,
    reasons: false,
    source: false,
    errorDetails: false
};
/**
 * [done 展示webpack打包信息]
 * @param  {[type]}   err   [description]
 * @param  {[type]}   stats [description]
 * @return {Function}       [description]
 */
let done = function (err, stats) {
    if ( err || stats.hasErrors() ) {
        if ( stats.hasErrors() ){
            console.log('\n====================webpack====================\n');
            console.error('webpack compile error:\n' , stats.compilation.errors);
            console.log('\n===============================================\n');
        }
        return; 
    }
    stats = stats || {};
    let statsOptions = {};
    Object.keys(defaultStatsOptions).forEach(function (key) {
        if (typeof statsOptions[key] === 'undefined') {
            statsOptions[key] = defaultStatsOptions[key];
        }
    });
    gutil.log(stats.toString(statsOptions));
};
/**
 * [log 打印模块信息]
 * @param  {[type]}   moduleName [description]
 * @param  {Function} callback   [description]
 * @return {[type]}              [description]
 */
let log = function(moduleName , callback){
    return function(err , stdout , stderr){
        console.log(`=====Start======> [${moduleName}] stdout:\n${stdout}`);
        console.log(`=====Start======> [${moduleName}] stderr:\n${stderr}`);
        console.log('\n<=====End======');
        if ( callback ){
            callback(err);
        }
    };
};
/**
 * [prewebpack 保证webpack完成之后再进入，下一个任务]
 * @param  {Function} callback [description]
 * @return {[type]}            [description]
 */
let prewebpack = function(callback){
    return (err, stats)=>{
        done(err,stats);
        if ( callback ){
            callback();
        }
    };
};

gulp.task('npm-prune' , function(cb){
    exec('npm prune' , log('npm prune' ,cb));
});
gulp.task('del', function () {
    return del(['static/dist' , 'server/views/index.html']);
});
gulp.task('webpackDev' , function(){
    return webpack(webpackDev , prewebpack());
});
gulp.task('webpackProd' , function(callback){
    return webpack(webpackProd , prewebpack(callback));
});
gulp.task('dev' ,function(){
    return runSequence('npm-prune' , 'del' , 'webpackDev');
});
gulp.task('default', ['dev']);
gulp.task('prod' , function(){
    return runSequence('npm-prune' , 'del' , 'webpackProd');
});
gulp.task('pub' , ['prod']);

