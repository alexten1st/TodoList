import { LOGIN, LOGOUT } from "../actionCreators/userActionCreators";

export function loginAC() {
    return { type: LOGIN };
  }
  export function logoutAC(payload) {
    return { type: LOGOUT, payload };
  }