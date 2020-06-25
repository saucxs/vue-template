<template>
  <div id="app">
    <header-bar></header-bar>
    <div class="container">
      <menu-bar ref="lefeMenu" class="sidebar-container"></menu-bar>
      <div class="right-box">
        <div class="content">
          <router-view></router-view>
        </div>
        <footer-bar></footer-bar>
      </div>
    </div>
  </div>
</template>

<script>
  import headerBar from '../components/header'
  import menuBar from "../components/menu";
  import footerBar from "../components/footer";
  export default {
    data() {
      return {

      }
    },
    components: {
      headerBar,
      menuBar,
      footerBar
    }
  }
</script>

<style lang="less">
  .container {
    height: calc(100% - 46px);
    margin: auto;
    display: flex;
    .sidebar-container{
      transition: width 0.28s ease-out;
      width: 180px;
      overflow: auto;
      border-right: 1px solid #e6e6e6;
    }
    .right-box{
      height: 100%;
      width: calc(100% - 180px);
      margin-left: 10px;
      overflow: auto;
    .content{
      min-height: calc(100% - 82px);
      padding: 20px 40px;
      background-color: #fff;
    }
  }
  }
</style>
