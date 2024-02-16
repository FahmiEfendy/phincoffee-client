import { setLogin, setToken, setUser } from '@containers/Client/actions';

export const logout = (dispatch, navigate) => {
  dispatch(setLogin(false));
  dispatch(setUser({}));
  dispatch(setToken(null));
  navigate('/login');
};
