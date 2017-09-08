'use strict';

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state:{
    dialog:{
      message:'',
      isShow:false
    }
  },
  mutations:{
    setDialogMsg: (state , msg) => state.dialog.message = msg,
    showDialog: state => state.dialog.isShow = true,
    hideDialog: state => state.dialog.isShow = false
  }
});
