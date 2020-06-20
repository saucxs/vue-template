<template>
  <div class="menu">
     <el-menu
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      router = router
      active-text-color="#ffd04b"
      :default-active="$route.path">
      <el-menu-item index="/writeWeekly">
        <i class="el-icon-menu"></i>
        <span slot="title">模块1</span>
      </el-menu-item>
       <el-menu-item index="/weeklyList">
         <i class="el-icon-location"></i>
         <span slot="title">模块2</span>
       </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
  export default {
    name: "asideItem",
    data(){
      return{
        router: true
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  };
</script>

<style lang="less" scoped>
  .menu {
    transition: width 0.28s ease-out;
    width: 180px;
    background: #545c64;
    .el-menu{
      width: 100%;
      border-right: none;
      overflow: auto;
    }
  }
</style>
