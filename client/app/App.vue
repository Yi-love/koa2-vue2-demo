<template>
  <div id="app">
    <h1 class="title">Vue Test</h1>
    <a href="#/">首页</a>
    <a href="#/a">测试sass</a>
    <a href="#/button">测试button加载sass</a>
    <a href="#/input">测试less</a>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app'
  };
</script>

<style>
  .title{
    color: red;
  }
</style>