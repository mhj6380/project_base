import React, { useCallback } from "react";
import Link from "next/link";
import { TextField } from "@material-ui/core";
import axios from "axios";
import { useCookies } from "react-cookie";
import {
  Title,
  ViewWrapper,
  LoginFormWrapper,
  CheckboxWrapper,
  ForgotPassword,
  FieldWrapper,
  SubmitBtn,
  GraySubmitBtn,
} from "./styled";
import { useRouter } from "next/router";
import FlatLayout from "../../components/layout/FlatLayout";
import { authLoginEndpoint } from "../../endpoints/app.endpoint";
// import FlatLayout from "@Components/layout/FlatLayout";
// import useSWR from "swr";
// import { fetcher } from "globalFunction";
// import DataLoading from "components/tools/DataLoading";
// import { useAuthState } from "lib/providers/authProvider";

const LoginForm = () => {
  // const me = useAuthState();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [cookies, setCookie] = useCookies(["accessToken", "refreshToken"]);

  const Router = useRouter();

  // const { data: splashData } = useSWR(
  //   `${BACKEND_URL}/splash/${me.userInfo.userId}/KO`,
  //   fetcher
  // );

  React.useEffect(() => {
    if (cookies.accessToken) {
      alert("이미 로그인이 되어있습니다.");
      Router.push("/");
      return;
    }
  }, []);

  const handleSubmit = useCallback(
    (e: any) => {
      e.preventDefault();

      if (!email) return alert("이메일을 입력해 주세요.");
      if (!password) return alert("패스워드를 입력해 주세요.");

      axios
        .post(authLoginEndpoint, {
          userId: email,
          password,
        })
        .then((res: any) => {
          console.log(res.data);
          if (!res.data.access_token) return alert("토큰 발급 에러입니다!");
          setCookie("accessToken", res.data.access_token, {
            path: "/",
            maxAge: 100000,
          });
          setCookie("refreshToken", res.data.refresh_token, {
            path: "/",
            maxAge: 700000,
          });
          window.location.href = "/";
          return;
        })
        .catch(function (error) {
          if (error.response) {
            // 요청이 이루어졌으며 서버가 2xx의 범위를 벗어나는 상태 코드로 응답했습니다.
            // console.log(error.response.data);
            // console.log(error.response.status);
            // console.log(error.response.headers);
            return alert(error.response.data.message);
          } else if (error.request) {
            // 요청이 이루어 졌으나 응답을 받지 못했습니다.
            // `error.request`는 브라우저의 XMLHttpRequest 인스턴스 또는
            // Node.js의 http.ClientRequest 인스턴스입니다.
            console.log(error.request);
          } else {
            // 오류를 발생시킨 요청을 설정하는 중에 문제가 발생했습니다.
            console.log("Error", error.message);
          }
          return alert("서버 에러");
        });
    },
    [email, password]
  );

  return (
    <FlatLayout title="로그인">
      <ViewWrapper>
        <LoginFormWrapper>
          {/* {splashData ? (
            <Title>
              {splashData.pageLogo ? (
                <img
                  src={splashData.pageLogo}
                  alt="logo"
                  style={{ height: '60px' }}
                />
              ) : (
                'Login'
              )}
            </Title>
          ) : (
            <Title>
              <DataLoading height={60} />
            </Title>
          )} */}
          <Title>로그인</Title>

          <LoginTextField
            label="아이디"
            type="text"
            val={email}
            setVal={setEmail}
          />
          <LoginTextField
            label="비밀번호"
            type="password"
            val={password}
            setVal={setPassword}
          />
          <CheckboxWrapper>
            <label htmlFor="longsession">
              <input id="longsession" type="checkbox" />
              &nbsp; 자동로그인
            </label>
          </CheckboxWrapper>
          <SubmitBtn onClick={handleSubmit}>로그인</SubmitBtn>
          <Link href="/auth/register">
            <GraySubmitBtn>회원가입</GraySubmitBtn>
          </Link>
          <ForgotPassword>
            <Link href="/auth/find/password">비밀번호를 잊으셨나요?</Link>
          </ForgotPassword>
          {/* <NoAccount>
            계정이 없으신가요? <Link href="/auth/register">회원가입</Link>
          </NoAccount> */}
        </LoginFormWrapper>
      </ViewWrapper>
    </FlatLayout>
  );
};

const LoginTextField = (props) => {
  const { label, type, val, setVal } = props;
  return (
    <FieldWrapper>
      <TextField
        label={label}
        fullWidth
        value={val}
        type={type}
        onChange={(e) => {
          setVal(e.target.value);
        }}
      />
    </FieldWrapper>
  );
};

export default LoginForm;
