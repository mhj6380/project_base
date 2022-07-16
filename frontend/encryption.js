import CryptoJS from 'crypto-js';
import { AESKey } from './config';

export const Encrypt = (msg) => {
  return CryptoJS.AES.encrypt(msg, AESKey, {
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  }).toString();
};

export const Decrypt = (base64string) => {
  return CryptoJS.AES.decrypt(base64string, AESKey).toString(CryptoJS.enc.Utf8);
};
