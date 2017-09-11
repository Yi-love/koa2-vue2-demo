'use strict';

import Vue from 'vue';
import axios from 'axios';
import Vuex from 'vuex';

import dialog from './modules/dialog';
import userList from './modules/userList';

Vue.use(Vuex);

export default new Vuex.Store({
  modules:{
    dialog,
    userList
  }
});
