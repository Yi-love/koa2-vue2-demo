<template>
  <div class="input">
    <label for="">Input: </label><input type="text" class="ui-input" v-model="msg">
    <p>{{msg}}</p>
  </div>
</template>

<script>
  export default {
    name: 'ui-input',
    data(){
      return {
        msg:'message is here!'
      };
    }
  };
</script>