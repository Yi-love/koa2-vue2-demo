'use strict';

import Vue from 'vue';
import axios from 'axios';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state:{
    dialog:{
      message:'',
      isShow:false
    },
    userList:[]
  },
  mutations:{
    setUserList: (state , userList) => state.userList = userList,
    setDialogMsg: (state , msg) => state.dialog.message = msg,
    showDialog: state => state.dialog.isShow = true,
    hideDialog: state => state.dialog.isShow = false
  },
  actions:{
    getUserList({commit , state}){
      axios.get('/api/getUserList').then((result)=>{
        result = result.data;
        if ( result && +result.code === 0 ){
          commit('setUserList' , result.data);
        }else{
          commit('setDialogMsg' , result.message ? result.message : 'get user list error');
          commit('showDialog');
        }
      },(error)=>{
        commit('setDialogMsg' , error.message ? error.message : 'req error');
        commit('showDialog');
      });
    }
  }
});
