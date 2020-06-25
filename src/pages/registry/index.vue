<template>
  <div id="registry">
    <div class="loginHeader">
      <h1>{{systemName}}</h1>
    </div>
    <div class="login_contenter">
      <div class="content_box">
        <div class="content_box_form">
          <div class="flex-style">
            <h1 class="cursor-style" @click="goLogin()">登&nbsp;录</h1>
            <h1>注&nbsp;册</h1>
          </div>
          <p class="form_content">
            <input
              minlength="6"
              maxlength="30"
              type="text"
              name="username"
              placeholder="用户名"
              v-model="username"
            />
          </p>
          <p class="form_content">
            <input
              minlength="6"
              maxlength="16"
              type="password"
              placeholder="密码"
              @keyup.enter="submit"
              v-model="password"
            />
          </p>
           <p class="form_content">
            <input
              minlength="6"
              maxlength="50"
              type="text"
              name="username"
              placeholder="邮箱"
              v-model="email"
            />
          </p>
          <button class="loginBtn" @click="submit">注册</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'registry',
  data() {
    return {
      flag: 'registry',
      username: '',
      password: '',
      email: '',
    };
  },
  computed: {
    ...mapGetters(['systemName']),
  },
  methods: {
    ...mapActions(['register']),
    goLogin() {
      this.$router.push({ path: '/login' });
    },
    submit() {
      var param = {
        name: this.username,
        password: this.password,
        email: this.email,
      };
      if (this.username && this.password && this.email) {
        console.log(param, 'param=========');
        this.register(param).then(res => {
          console.log(res, 'res')
          if (res.success) {
            this.$message({
              type: 'success',
              message: res.message || '注册成功'
            });
            this.$router.push({ path: '/login' });
          } else {
            this.$message({
              type: 'warning',
              message: res.message || '服务开小差'
            });
          }
        });
      }
    },
  },
};
</script>

<style lang="less" scoped>
.loginHeader {
  height: 60px;
  padding: 14px 0 14px 10%;
}
.cursor-style {
  cursor: pointer;
  color: #4764c0;
}

.login_icon {
  display: block;
  width: 334px;
  height: 72px;
  display: inline-block;
}

.login_contenter {
  width: 100%;
  background-position: 100% 100%;
}
.content_box {
  width: 805px;
  height: 480px;
  padding: 50px 0px;
  margin: 0 auto;
  box-sizing: border-box;
}
.flex-style {
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.content_box_img_bg {
  position: absolute;
}
.content_box_form {
  box-sizing: border-box;
  display: inline-block;
  width: 320px;
  height: 380px;
  vertical-align: top;
  text-align: center;
  background-color: #ffffff;
  float: right;
  padding: 20px;
  margin-top: 2px;
}
.clear {
  clear: both;
}
h1 {
  list-style-type: none;
  font-family: PingFangSC-Regular;
  font-size: 20px;
  color: #000000;
  letter-spacing: 10px;
}
.form_content {
  width: 100%;
  height: 36px;
  border: 1px solid #ddd6db;
  border-radius: 5px;
  margin: 30px 0;
  position: relative;
  padding: 0;
  text-align: left;
}
.form_content input {
  width: 88%;
  height: 34px;
  margin: 0 6px;
  position: absolute;
  outline: none;
  border: none;
}
input:focus::-webkit-input-placeholder {
  color: transparent;
}
.form_content img {
  width: 16px;
  height: 16px;
  display: inline-block;
  margin: 8px 4px;
}
.phoneYZ {
  width: 100%;
  height: 40px;
  line-height: 40px;
  margin-top: 20px;
}
.dxyz {
  width: 50%;
  display: block;
  float: left;
}
.dxyz img {
  vertical-align: middle;
}
.dxyz a {
  text-decoration: none;
  color: #4f5870;
}
.forget {
  display: block;
  width: 30%;
  float: right;
}
.forget a {
  text-decoration: none;
  color: #5375f1;
  font-size: 14px;
}
.loginBtn {
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border-radius: 5px;
  background-color: #4764c0;
  color: #ffffff;
  border: none;
  cursor: pointer;
}
.registerBtn {
  width: 100%;
  height: 40px;
  text-align: center;
  line-height: 40px;
  margin-top: 30px;
  color: #4f5870;
}
.registerBtn a {
  text-decoration: none;
  color: #5375f1;
}
.border {
  border: 1px solid #55aaff;
}
.footer {
  width: 100%;
  text-align: center;
}
.footer ul {
  list-style-type: none;
  margin: 50px auto 20px auto;
  width: 430px;
  text-align: center;
}
.footer ul li {
  float: left;
}
.footer ul li {
  text-decoration: none;
  font-family: PingFang-SC-Medium;
  font-size: 16px;
  color: #22366d;
  letter-spacing: 0;
  border-right: 1px solid #000000;
  border-left: 1px solid #000000;
  width: 84px;
  display: inline-block;
  font-weight: 700;
}
.footer ul li a {
  text-decoration: none;
}
.footer ul li:nth-last-of-type(1) {
  border-right: none;
}
.footer ul li:nth-of-type(1) {
  border-left: none;
}
.footerBottom {
  width: 375px;
  height: 48px;
  font-family: PingFangSC-Regular;
  font-size: 12px;
  color: #22366d;
  letter-spacing: 0;
  line-height: 24px;
  margin: 16px auto 42px auto;
}
.errorTip {
  font-size: 14px;
  color: #ed4747;
}
.viewPassword {
  position: absolute;
  cursor: pointer;
  right: 10px;
  top: 10px;
}
.colorViewPassword {
  position: absolute;
  cursor: pointer;
  right: 10px;
  top: 10px;
  color: #5579ee;
}
</style>
