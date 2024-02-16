import { POST_REGISTER } from './constants';

export const setRegister = (dataUser, cbSuccess, cbFailed) => ({
  type: POST_REGISTER,
  dataUser,
  cbSuccess,
  cbFailed,
});
