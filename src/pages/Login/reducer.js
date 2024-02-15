import { produce } from 'immer';
import { POST_LOGIN } from './constants';

export const initialState = {
  login: {},
};

export const storedKey = ['login'];

const loginReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case POST_LOGIN:
        draft.login = action.login;
        break;
      default:
        break;
    }
  });

export default loginReducer;
