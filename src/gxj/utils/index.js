import CryptoJS from "../plugins/crypto-js";

export const cryptoAes = function(value, key) {
  return CryptoJS.AES.encrypt(value, key).toString();
};
