<template>
  <div class="user-box">
    <button class="user-btn" @click="getUserList">Get User List</button>
    <ul class="user-list" v-for="user in userList">
      <li class="user-i"><span>Name: {{user.name}}</span><span>Age: {{user.age}}</span></li>
    </ul>
  </div>
  
</template>

<script>
  import {mapState} from 'vuex';
  import store from '../store';
  export default {
    name:'user',
    computed:mapState({
      userList: state => state.userList.userList
    }),
    methods:{
      getUserList(){
        store.dispatch('getUserList');
      }
    }
  };
</script>

<style lang="scss">
  .user-box{
    .user-btn{
      padding: 10px 40px;
      border:none;
    }
    .user-list{
      margin-top: 20px;
      .user-i{
        padding: 4px 10px;
      }
    }
  }
</style>