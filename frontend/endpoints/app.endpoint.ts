import { BACKEND_URL } from "../config";

// ************ Auth ************
// 회원가입
export const authRegisterEndpoint = BACKEND_URL + `/auth/register-web`;
// 로그인
export const authLoginEndpoint = BACKEND_URL + `/auth/login`;
