'use strict';

const webpack = require('webpack');
const config = require('./webpack.config');

webpack(config(true) , (err , status)=>{
  console.log('err: ' + err);
  console.log('status: ' + status);
});