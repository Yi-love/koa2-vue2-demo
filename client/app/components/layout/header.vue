<template>
  <header class="kv-header">
    <h1 class="title">{{title}}</h1>
  </header>
</template>

<script>
  export default {
    name:'kv-header',
    data (){
      return {
        title:'this is header'
      };
    }
  };
</script>

<style lang="scss">
  .kv-header{
    width: 100%;
    height: 100%;
    .title{
      height: 100%;
      margin: 0;
      color: #fff;
      line-height: 80px;
      padding: 0 10px;
    }
  }
</style>