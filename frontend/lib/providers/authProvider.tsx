import React, { useReducer, useContext, createContext, Dispatch } from "react";
// import Cookies from "js-cookie";
// import Axios from "axios";
// 필요한 타입들을 미리 선언
 
// 상태를 위한 타입
type State = {
  userInfo: any;
  language: string;
  notiCount: number;
};

// 모든 액션들을 위한 타입
type Action = 
  | { type: "UPDATE_USER"; userInfo: any }
  | { type: "UPDATE_LANGUAGE"; language: string }
  | { type: "UPDATE_NOTICOUNT"; notiCount: number };
 
// 디스패치를 위한 타입 (Dispatch 를 리액트에서 불러올 수 있음), 액션들의 타입을 Dispatch 의 Generics로 설정
type AuthDispatch = Dispatch<Action>;

// Context 만들기
const AuthStateContext = createContext<any | null>(null);
const AuthDispatchContext = createContext<AuthDispatch | null>(null);

// 리듀서
function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "UPDATE_USER":
      return {
        ...state,
        userInfo: action.userInfo, // text가 자동완성되며, string 타입인걸 알 수 있습니다.
      };

    
    case "UPDATE_LANGUAGE":
      return {
        ...state,
        language: action.language,
      };

    case "UPDATE_NOTICOUNT":
      return {
        ...state,
        notiCount: action.notiCount,  
      }; 
    default:
      throw new Error("Unhandled action");
  }
}

// AuthProvider 에서 useReduer를 사용하고
// AuthStateContext.Provider 와 SampleDispatchContext.Provider 로 children 을 감싸서 반환합니다.
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  // const accessToken = Cookies.get("accessToken"); // => 'value'

  var userInfo = {};
  var language = "ko";
  var notiCount = 0;

  const [state, dispatch] = useReducer(reducer, {
    userInfo,
    language, 
    notiCount
  });

  return (
    <AuthStateContext.Provider value={state}>
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  );
};

// state 와 dispatch 를 쉽게 사용하기 위한 커스텀 Hooks
export function useAuthState() {
  const state = useContext(AuthStateContext);
  if (!state) throw new Error("Cannot find AuthProvider"); // 유효하지 않을땐 에러를 발생
  return state;
}

export function useAuthDispatch() {
  const dispatch = useContext(AuthDispatchContext);
  if (!dispatch) throw new Error("Cannot find AuthProvider"); // 유효하지 않을땐 에러를 발생
  return dispatch;
}
