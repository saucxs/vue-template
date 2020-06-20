import Api from "../api/api";
import * as types from "./mutation-types";

/* 注册-激活 */
export const registry = (params) => {
  return Api.registry(params).then(res => {
    return res;
  }).catch(err => {
    console.log(err);
  });
};
/* 登陆 */
export const login = ({commit}, params) => {
  return Api.login(params).then(res => {
    if (res.success) {
      commit(types.userInfoMutation, res.userInfo);
    }
    return res;
  }).catch(err => {
    console.log(err);
  });
};