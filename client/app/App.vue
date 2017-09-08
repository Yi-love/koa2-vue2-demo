<template>
  <div class="kv-app">
    <div class="kv-head">
      <kv-header></kv-header>
    </div>
    <div class="kv-side">
      <kv-sidebar></kv-sidebar>
    </div>
    <div class="kv-body">
      <router-view v-bind:dialog="dialog"></router-view>
      <div class="kv-foot">
        <kv-footer></kv-footer>
      </div>
    </div>
    <kv-dialog v-bind:dialog="dialog"></kv-dialog>
  </div>
</template>

<script>
  import kvHeader from './components/layout/header';
  import kvSidebar from './components/layout/sidebar';
  import kvFooter from './components/layout/footer';
  import kvDialog from './components/common/dialog';

  export default {
    name: 'kv-app',
    data(){
      return {
        dialog:{
          message:'',
          isShow:false
        }
      };
    },
    components:{kvHeader,kvSidebar,kvFooter,kvDialog}
  };
</script>

<style lang="scss">
  .kv-app{
    $hh: 80px;
    $sw: 220px;

    width: 100%;
    height: 100%;
    box-sizing:border-box;
    padding: $hh 0 0 $sw;
    position: relative;
    .kv-head{
      position: fixed;
      z-index: 8;
      padding-left: $sw;
      box-sizing:border-box;
      width: 100%;
      height: $hh;
      top: 0;
      left: 0;
      background: #878c90;
    }
    .kv-side{
      position: fixed;
      top: 0;
      left: 0;
      z-index: 9;
      height: 100%;
      background: #316194;
    }
    .kv-body{
      width: 100%;
      height: 100%;
      position: relative;
      padding: 10px 10px 40px 10px;
      box-sizing:border-box;
      overflow: auto;
      .kv-foot{
        width: 100%;
        height: 40px;
        background: #e3e6e6;
        position: absolute;
        bottom:0;
        left: 0;
      }
    }
  }
</style>