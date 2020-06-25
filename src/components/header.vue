<template>
  <header class="header">
    <div class="header-box">
      <el-row type="flex" justify="center">
        <el-col :span="12">
          <div class="header-logo">
            XXX后台管理
          </div>
        </el-col>
        <el-col :span="11">
          <el-row type="flex" justify="end">
            <el-dropdown>
              <div class="header-user-name">{{userInfo.name}}<i class="el-icon-caret-bottom el-icon--right"></i></div>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>
                  <a @click="signOut()">退出</a>
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-row>
        </el-col>
      </el-row>
    </div>
  </header>
</template>

<script>
  import { mapActions } from 'vuex';
   export default {
    name: 'Header',
    data() {
      return {
        userInfo: {}
      }
    },
    computed: {
      
    },
    mounted() {
      this.userInfo = JSON.parse(localStorage.getItem("XXXUserInfo"));
      console.log(localStorage.getItem("XXXUserInfo"), '======');
    },
     methods: {
       ...mapActions([
         "logout"
       ]),
       signOut() {
         this.logout().then(res => {
           if(res.errno == 0){
             this.$router.push({ path: '/login' });
             this.$store.commit("USER_INFO", {});
           }
         })
       }
     }
  }

</script>

<style lang="less" scoped>
.header {
  color: #fff;
  font-size: 14px;
  background: #3a79ff;
  height: 46px;
  line-height: 46px;
  font-weight: 700;
  box-shadow: 0 2px 10px 0 rgb(0, 0, 0, 0.4);
  .header-box{
    margin: 0 auto;
    background: #3a79ff;
  }
  .header-user-name {
    cursor: pointer;
    color: #fff;
  }
  .el-dropdown {
    color: #ffffff;
  }
}
</style>
