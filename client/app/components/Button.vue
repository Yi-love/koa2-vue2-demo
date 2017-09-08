<template>
  <div class="button">
    <button class="ui-btn" @click="showDialog">Show Dialog</button>
  </div>
</template>

<script>
  export default {
    name :'ui-button',
    props:['dialog'],
    methods:{
      showDialog(){
        this.dialog.message = 'this is a dialog message';
        this.dialog.isShow = true;
      }
    }
  };
</script>