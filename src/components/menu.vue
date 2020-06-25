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
      <div v-if="menuList.length > 0">
        <template v-for="item in menuList[0].children">
         <el-submenu :key="item.key" v-if="item.isHasChild" :index="item.path">
           <template slot="title">
             <i :class="item.icon"></i>
             <span>{{item.meta.name}}</span>
           </template>
           <template v-for="child in item.children">
             <el-menu-item :key="child.path" :index="child.path">
               <router-link :to="child.path">
                 {{child.meta.name}}
               </router-link>
             </el-menu-item>
           </template>
         </el-submenu>
         <el-menu-item v-if="!item.isHasChild" :key="item.path" :index="item.path">
           <router-link :to="item.path">
             <i :class="item.icon"></i>{{item.meta.name}}
           </router-link>
         </el-menu-item>
        </template>
      </div>
      </el-menu>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
  export default {
    name: "menu",
    data(){
      return{
        router: true
      }
    },
    computed: {
      ...mapGetters([
        "userInfo",
      ]),
      menuList () {
        const finalyMenu = this.$router.options.routes.filter(item => item.meta.key !== '0');
        return finalyMenu;
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
