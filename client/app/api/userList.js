'use strict';

import axios from 'axios';

export const getUserList = function(){
  return axios.get('/api/getUserList');
};

