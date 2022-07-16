import React, { useState } from "react";
import Link from "next/link";
import { TextField } from "@material-ui/core";
import {
  Title,
  ViewWrapper,
  LoginFormWrapper,
  CheckboxWrapper,
  FieldWrapper,
  SubmitBtn,
  ValidationAlert,
  GraySubmitBtn,
} from "./styled";
import axios from "../../util/axios";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";
import { authRegisterEndpoint } from "../../endpoints/app.endpoint";
// import useSWR from "swr";
// import { BACKEND_URL } from "config";
// import { fetcher } from "globalFunction";
// import { useAuthState } from "lib/providers/authProvider";

const RegisterForm = () => {
  // const me = useAuthState();
  const Router = useRouter();
  const [email, setEmail] = React.useState("");
  const [nickname, setNickname] = React.useState("");
  // const [username, setUsername] = React.useState('');
  const [phone, setPhone] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordConfirm, setPasswordConfirm] = React.useState("");
  const [agreeService, setAgreeService] = React.useState(false);
  const [agreeGain, setAgreeGain] = React.useState(false);
  const [agreeMarketing, setAgreeMarketing] = React.useState(false);
  const [cookies, setCookie] = useCookies(["accessToken", "refreshToken"]);

  // ValidationForm
  const [valiEmail, setValiEmail] = useState("");
  const [valiPwd, setValiPwd] = useState("");
  const [valiPwdConfirm, setValiPwdConfirm] = useState("");
  const [valiNickname, setValiNickname] = useState("");

  // const { data: splashData } = useSWR(
  //   `${BACKEND_URL}/splash/${me.userInfo.userId}/KO`,
  //   fetcher
  // );

  React.useEffect(() => {
    if (cookies.accessToken) {
      Router.push("/");
    }
  }, [cookies]);

  const handleOnSubmit = async (e: any) => {
    e.preventDefault();
    // alert("TQ");
    // return;

    // if (!validationEmail(email, true)) {
    //   return false;
    // }

    if (!validationPasswd(password, true)) {
      return false;
    }

    if (!email) setValiEmail("이메일을 입력해주세요.");
    if (!nickname) setValiNickname("이름을 입력해주세요.");
    if (!password) setValiPwd("비밀번호를 입력해주세요.");
    if (!passwordConfirm) setValiPwdConfirm("비밀번호 확인을 입력해주세요.");
    if (!phone) setValiPwdConfirm("휴대폰번호를 입력해주세요.");

    if (!agreeGain) return alert("개인정보 취급방침 방침에 동의해주세요.");
    if (!agreeService) return alert("서비스 이용약관에 동의해주세요.");

    if (!email || !password || !passwordConfirm || !nickname) {
      alert("정보를 모두 입력해주세요");
      return;
    }

    if (!validationPasswdConfirm(passwordConfirm, true)) {
      return false;
    }

    // if (password !== passwordConfirm) {
    //   alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
    //   setPassword("");
    //   setPasswordConfirm("");
    //   return;
    // }

    try {
      const token: any = await axios.post(authRegisterEndpoint, {
        userId: email,
        password,
        nickname,
        username: nickname,
        phone,
        agreeMarketing,
      });

      console.log(token);
      // console.log(token.data);
      if (token.status === 201 || token.status === 200) {
        setCookie("accessToken", token.data.access_token, {
          path: "/",
          maxAge: 100000,
        });
        setCookie("refreshToken", token.data.refresh_token, {
          path: "/",
          maxAge: 700000,
        });
        alert(token.data.message);
        window.location.href = "/";
        return;
      } else {
        alert(token.data.message);
        return;
      }
      return;
    } catch (err) {
      alert(err);
      setEmail("");
      setPassword("");
      setPasswordConfirm("");
      return;
    }
  };

  // 이메일 정규표현식 체크
  // const validationEmail = (email, submit) => {
  //   // var email = e.target.value;
  //   setEmail(email);
  //   var exptext = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
  //   if (exptext.test(email) === false) {
  //     if (email === '') {
  //       //이메일 형식이 알파벳+숫자@알파벳+숫자.알파벳+숫자 형식이 아닐경우
  //       if (submit) {
  //         setValiEmail('이메일은 필수 입력 항목입니다.');
  //       }
  //     } else {
  //       if (submit) {
  //         setValiEmail('이메일 형식이 올바르지 않습니다.');
  //       }
  //     }
  //     return false;
  //   }
  //   setValiEmail('');
  //   return true;
  // };

  const validationPasswd = (pw, submit) => {
    setPassword(pw);
    var num = pw.search(/[0-9]/g);
    var eng = pw.search(/[a-z]/gi);

    if (pw.length < 8 || pw.length > 20) {
      if (submit) {
        setValiPwd("8자리 ~ 20자리 이내로 입력해주세요.");
      }
      return false;
    } else if (pw.search(/\s/) !== -1) {
      if (submit) {
        setValiPwd("비밀번호는 공백 없이 입력해주세요.");
      }
      return false;
    } else if (num < 0 || eng < 0) {
      if (submit) {
        setValiPwd("영문,숫자를 혼합하여 입력해주세요.");
      }
      return false;
    } else {
      setValiPwd("");
      return true;
    }
  };

  const validationPasswdConfirm = (pwConfirm, submit) => {
    setPasswordConfirm(pwConfirm);
    if (password !== pwConfirm) {
      if (submit) {
        setValiPwdConfirm("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
      }
      return false;
    } else {
      setValiPwdConfirm("");
      return true;
    }
  };

  const handleAllpass = (e: any) => {
    if (e.target.checked) {
      setAgreeService(true);
      setAgreeGain(true);
      setAgreeMarketing(true);
    } else {
      setAgreeService(false);
      setAgreeGain(false);
      setAgreeMarketing(false);
    }
  };

  // 이미 로그인중이라면 메인으로
  // if (me) Router.push('/');

  // if (cookies.accessToken) {
  //   Router.push('/');
  // }

  // if (!splashData) return <></>;

  return (
    <ViewWrapper>
      <LoginFormWrapper>
        <Title>회원가입</Title>
        <LoginTextField
          label="아이디"
          type="text"
          val={email}
          setVal={setEmail}
        />
        <ValidationAlert>{valiEmail}</ValidationAlert>

        <LoginTextField
          label="비밀번호"
          type="password"
          val={password}
          setVal={setPassword}
        />
        <ValidationAlert>{valiPwd}</ValidationAlert>
        <LoginTextField
          label="비밀번호 확인"
          type="password"
          val={passwordConfirm}
          setVal={setPasswordConfirm}
        />
        <ValidationAlert>{valiPwdConfirm}</ValidationAlert>

        <LoginTextField
          label="이름"
          type="text"
          val={nickname}
          setVal={setNickname}
        />
        <ValidationAlert>{valiNickname}</ValidationAlert>

        <LoginTextField
          label="휴대폰번호"
          type="text"
          val={phone}
          setVal={setPhone}
        />

        <CheckboxWrapper>
          <div className="parent-section">
            <label htmlFor="longsession">
              <input
                id="longsession"
                type="checkbox"
                onChange={handleAllpass}
                value={1}
              />
              &nbsp; 모두 동의합니다.
            </label>
          </div>
          <div className="child-section">
            <label htmlFor="longsession">
              <input
                id="longsession"
                type="checkbox"
                checked={agreeGain}
                onChange={() => {
                  setAgreeGain(!agreeGain);
                }}
              />
              &nbsp; 개인정보 취급방침 동의 (필수)
            </label>
            &nbsp;&nbsp;
            <a target="_blank" href="/permission-gain">
              보기
            </a>
          </div>
          <div className="child-section">
            <label htmlFor="longsession">
              <input
                id="longsession"
                type="checkbox"
                checked={agreeService}
                onChange={() => {
                  setAgreeService(!agreeService);
                }}
              />
              &nbsp; 이용약관 동의 (필수)
            </label>
            &nbsp;&nbsp;
            <a target="_blank" href="/permission-service">
              보기
            </a>
          </div>
          <div className="child-section">
            <label htmlFor="longsession">
              <input
                id="longsession"
                type="checkbox"
                checked={agreeMarketing}
                onChange={() => {
                  setAgreeMarketing(!agreeMarketing);
                }}
              />
              &nbsp; 마케팅 정보 수신 동의 (선택)
            </label>
            &nbsp;&nbsp;
            <a target="_blank" href="/permission-marketing">
              보기
            </a>
          </div>
        </CheckboxWrapper>

        <SubmitBtn onClick={handleOnSubmit}>회원가입</SubmitBtn>
        <Link href="/auth/login">
          <GraySubmitBtn>로그인</GraySubmitBtn>
        </Link>
        {/* <NoAccount>
          이미 계정이 있으신가요? <Link href="/auth/login">로그인</Link>
        </NoAccount> */}
      </LoginFormWrapper>
    </ViewWrapper>
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

export default RegisterForm;
