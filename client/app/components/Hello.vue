<template>
  <div class="hello">
    <h2 class="small-title">{{msg}}</h2>
      <p>you know me?????????????</p>
      <word></word>
  </div>
</template>

<script>
  import Word from './Word';
  export default {
    name:'hello',
    data (){
      return {
        msg : 'see you....'
      };
    },
    components:{Word}
  };
</script>

<style>
  .small-title{
    color: blue;
  }
</style>