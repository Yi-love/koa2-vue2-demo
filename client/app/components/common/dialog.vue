<template>
  <div class="kv-dialog" v-bind:class="{show:dialog.isShow}">
    <div class="kv-dialog-container">
      <div class="kv-dialog-body">
        <div class="kv-dialog-content">{{dialog.message}}</div>
        <div class="kv-dialog-footer">
          <button class="kv-btn-ok" @click="okF">OK</button><button class="kv-btn-canl" @click="canlF">canl</button>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
  export default {
    name:'kv-dialog',
    props:['dialog'],
    methods:{
      canlF(){
        this.dialog.isShow = false;
      },
      okF(){
        this.dialog.isShow = false;
      }
    }
  };
</script>

<style lang="scss">
  .kv-dialog{
    display: none;
    position: fixed;
    z-index: 99999;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.5);
    .kv-dialog-container{
      width: 100%;
      height: 100%;
      position: relative;
      .kv-dialog-body{
        width: 400px;
        position: absolute;  
        box-sizing: border-box;
        transform: translate(-50% , -50%);
        left: 50%;
        top: 50%;
        background: #fff;
        .kv-dialog-content{
          width: 100%;
          height: 100%;
          min-height: 200px;
          box-sizing:border-box;
          padding:10px;
          line-height: 2;
          font-size: 18px;
        }
        .kv-dialog-footer{
          width: 100%;
          height: 40px;
          padding: 10px 0;
          button{
            border:none;
          }
          .kv-btn-canl{
            padding:0 40px;
            height: 40px;
            background:#eee;
            color: #000;
            float: right;
            margin-right: 10px;
          }
          .kv-btn-ok{
            padding:0 40px;
            height: 40px;
            background: blue;
            color: #fff;
            margin-right: 10px;
            float: right;
          }
        }
      }
    }
  }
  .kv-dialog.show{
    display: block;
  }
</style>