import { POST_LOGIN } from './constants';

export const setLogin = (dataUser, cbSuccess, cbFailed) => ({
  type: POST_LOGIN,
  dataUser,
  cbSuccess,
  cbFailed,
});
