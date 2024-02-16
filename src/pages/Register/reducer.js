import { produce } from 'immer';
import { POST_REGISTER } from './constants';

export const initialState = {
  register: {},
};

export const storedKey = ['register'];

const registerReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case POST_REGISTER:
        draft.register = action.register;
        break;
      default:
        break;
    }
  });

export default registerReducer;
