import {
  userInfoMutation
} from "../mutation-types.js";

const state = {
  systemName: 'xx系统',
  userInfo: JSON.parse(JSON.stringify(localStorage.getItem('XXXUserInfo'))),
};

const mutations = {
  // 登陆获取信息
  [userInfoMutation](state, data) {
    state.userInfo = data;
  },
}

export default {
  state,
  mutations
}
