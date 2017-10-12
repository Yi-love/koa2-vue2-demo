<template>
  <div class="kv-dialog" :class="{show:dialog.isShow}">
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
  import '../../../scss/common/dialog.scss';
  import {mapState} from 'vuex';
  import store from '../../store';
  export default {
    name:'kv-dialog',
    computed:mapState(['dialog']),
    methods:{
      canlF(){
        store.commit('hideDialog');
      },
      okF(){
        store.commit('hideDialog');
      }
    }
  };
</script>