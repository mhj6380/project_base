import { BACKEND_URL } from "../config";

// ************ Auth ************

// 회원가입
export const authRegisterEndpoint = BACKEND_URL + `/auth/register-web`;

// 로그인
export const authLoginEndpoint = BACKEND_URL + `/auth/login`;

// 유저정보 조회
export const authGetUserInfo = (userId: string) =>
  BACKEND_URL + `/auth/${userId}`;
