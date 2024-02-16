import { produce } from 'immer';

import {GET_PRODUCT_DETAIL, ADD_TO_CART} from './constants';

export const initialState = {
    productDetail: {}
};

export const storedKey = ['productDetail'];

const detailProductReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case GET_PRODUCT_DETAIL:
        draft.productDetail = action.productDetail;
        break;
    }
  });

export default detailProductReducer;

  