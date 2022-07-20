import { isUseSocket } from "config";
import { authGetUserInfo } from "endpoints/app.endpoint";
import jwtDecode from "jwt-decode";
import axios from "util/axios";

export const initializeAuth = (accessToken, dispatch) => {
  axios
    .get(authGetUserInfo(jwtDecode<any>(accessToken).userId), {
      headers: { Authorization: `Bearer ${accessToken}` },
    })
    .then((res: any) => {
      const userInfo = res.data;
      dispatch({ type: "UPDATE_USER", userInfo });

      if (isUseSocket) {
        // authStore.init(userInfo); // mobx
      }
    });
};
