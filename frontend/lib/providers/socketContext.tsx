import { SOCKET_BACKEND_URL } from "config";
import React from "react";
import socketIOClient from "socket.io-client";
const socket = socketIOClient(SOCKET_BACKEND_URL, {
  transports: ["websocket"],
  autoConnect: false,
});

// const me = useAuthState();

// socket.auth = {
//   sessionID: 'testsession',
//   uid: 'admin',
//   nickname: 'FIREMAN',
//   profile: '',
// };
// socket.connect();

export const SocketContext = (uid?: string) => {
  const sessionID = "";

  if (uid) {
    let socketAuth: any = {};

    if (sessionID) {
      socketAuth.sessionID = sessionID;
    }
    socketAuth.uid = uid;
    socketAuth.nickname = "nickname";
    socketAuth.profile = "profile";
    socket.auth = socketAuth;
    socket.connect();
  }

  return React.createContext(socket);
};
