'use strict';

const router = require('koa-router')();

router.prefix('/api');

router.get('/getUserList' , async(ctx)=>{
  ctx.body = {code:0 ,msg:'success'};
});

module.exports = router;