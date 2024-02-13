import { produce } from 'immer';

import { GET_CATEGORY_LIST_FAILED, GET_CATEGORY_LIST_REQUEST, GET_CATEGORY_LIST_SUCCESS } from './constants';

export const initialState = {
  categoryList: {
    data: [],
    isError: null,
  },
};

export const storedKey = ['category'];

const categoryReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case GET_CATEGORY_LIST_REQUEST:
        draft.categoryList.isError = null;
        draft.categoryList.data = [];
        break;

      case GET_CATEGORY_LIST_SUCCESS:
        draft.categoryList.isError = null;
        draft.categoryList.data = action.data;
        break;

      case GET_CATEGORY_LIST_FAILED:
        draft.categoryList.isError = action.error;
        draft.categoryList.data = [];
        break;

      default:
        break;
    }
  });

export default categoryReducer;
