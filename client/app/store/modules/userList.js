'use strict';

import {getUserList} from '../../api/userList';

const state = {
  userList:[]
};

const mutations = {
  setUserList: (state , userList) =>{
    state.userList = userList;
  } 
};

const actions = {
  getUserList({commit , state}){
    getUserList().then((result)=>{
      result = result.data;
      if ( result && +result.code === 0 ){
        commit('setUserList' , result.data);
      }else{
        commit('showDialog' , result.message ? result.message : 'get user list error');
      }
    },(error)=>{
      commit('showDialog' , error.message ? error.message : 'req error');
   });
 }
};

export default {state,mutations,actions};