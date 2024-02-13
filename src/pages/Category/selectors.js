import { createSelector } from 'reselect';

import { initialState } from './reducer';

const selectCategoryState = (state) => state.category || initialState;

export const selectCreateCategory = createSelector(selectCategoryState, (state) => state.createCategory);
export const selectCategoryList = createSelector(selectCategoryState, (state) => state.categoryList);
export const selectCategoryDetail = createSelector(selectCategoryState, (state) => state.categoryDetail);
export const selectUpdateCategory = createSelector(selectCategoryState, (state) => state.updateCategory);
