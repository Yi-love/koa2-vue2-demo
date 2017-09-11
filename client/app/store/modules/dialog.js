'use strict';

export default {
  state() {
    return {
      message:'',
      isShow:false
    };
  },
  getters: {
    message: state =>{
      return state.message;
    },
    isShow: state =>{
      return state.isShow;
    }
  },
  mutations:{
    showDialog: (state , msg) =>{ state.message = msg ; state.isShow = true;},
    hideDialog: state => state.isShow = false
  }
};