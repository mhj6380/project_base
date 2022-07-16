import axios from 'axios';
import { BACKEND_URL } from 'config';

// 쿠키로 변경예정
// const token = "token";

const rolesAxios = axios.create({
  baseURL: BACKEND_URL,
  headers: { pkgname: `com.hakgu.com`, uid: 'admin' },
});

rolesAxios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    // 오류 응답을 처리
    if (error.response) {
      // 요청이 이루어졌으며 서버가 2xx의 범위를 벗어나는 상태 코드로 응답했습니다.
      console.log(error.response.status);
      console.log(error.response.headers);
      alert(error.response.data.message);
      return;
    } else if (error.request) {
      // 요청이 이루어 졌으나 응답을 받지 못했습니다.
      // `error.request`는 브라우저의 XMLHttpRequest 인스턴스 또는
      // Node.js의 http.ClientRequest 인스턴스입니다.
      console.log(error.request);
    } else {
      // 오류를 발생시킨 요청을 설정하는 중에 문제가 발생했습니다.
      console.log('Error', error.message);
    }
    console.log(error.config);
    return Promise.reject(error);
  }
);

export default rolesAxios;
