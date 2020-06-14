import {
  newFriendMutation, friendReqTipsMutation, userInfoMutation, feedbackListMutation
} from "../mutation-types.js";

const state = {
  systemName: 'xx系统',
  userInfoData: JSON.parse(JSON.stringify(localStorage.getItem('HappyChatUserInfo'))),
};

const mutations = {
  // 登陆获取信息
  [userInfoMutation](state, data) {
    state.userInfoData = data;
  },
}

export default {
  state,
  mutations
}
