<template>
  <div class="word">
    <div class="hi">
      {{msg}}
    </div>
    <div class="cls">
      <div class="hi">
        {{red}}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name:'word',
    data(){
      return {
        msg: 'green',
        red:'red'
      };
    }
  };
</script>

<style lang="scss">
  .word{
    .hi{
      color: green;
    }
    .cls{
      .hi{
        color: red;
      }
    }
  }
</style>