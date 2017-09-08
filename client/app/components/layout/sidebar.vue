<template>
  <div class="kv-sidebar">
    <div class="user">
      <img src="/images/user/thumb.jpg" alt="User">
    </div>
    <ul class="menu">
      <li class="menu-i"><a href="#/">index</a></li>
      <li class="menu-i"><a href="#/a">test link</a></li>
      <li class="menu-i"><a href="#/button">test button</a></li>
      <li class="menu-i"><a href="#/input">test input</a></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name : 'kv-sidebar'
  };
</script>

<style lang="scss">
  .kv-sidebar{
    width: 220px;
    height: 100%;
    .user{
      width: 100%;
      height: 220px;
      img{
        width: 50%;
        height: 50%;
        margin: 25%;
        border-radius:100px;
      }
      overflow: hidden;
    }
    .menu{
      width: 100%;
      list-style: none;
      margin: 0;
      padding: 0;
      .menu-i{
        width: 100%;
        margin: 0;
        padding: 10px;
        box-sizing: border-box;
        color: #fff;
        a{
          color: #fff;
          &:hover{
            color: #7bbcf7;
          }
        }
      }
    }
  }
</style>