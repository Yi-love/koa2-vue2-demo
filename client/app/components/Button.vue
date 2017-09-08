<template>
  <div class="button">
    <button class="ui-btn" @click="showDialog">Show Dialog</button>
  </div>
</template>

<script>
  import store from '../store';
  export default {
    name :'ui-button',
    methods:{
      showDialog(){
        store.commit('setDialogMsg' , 'this is msg i send to you.');
        store.commit('showDialog');
      }
    }
  };
</script>