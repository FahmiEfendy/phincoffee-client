import { GET_PROFILE, SET_PROFILE } from './constants';

export const getProfile = (userId) => ({
  type: GET_PROFILE,
  userId,
});

export const setProfile = (profile) => ({
  type: SET_PROFILE,
  profile,
});
