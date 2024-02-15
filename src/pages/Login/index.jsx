/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable arrow-body-style */
import { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setLogin } from './actions';

import bgAuth from '../../static/images/bg-auth.jpg';

import classes from './style.module.scss';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState({});
  const [password, setPassword] = useState({});

  const doLogin = (e) => {
    e.preventDefault();

    try {
      const dataUser = {
        email,
        password,
      };
      dispatch(
        setLogin(dataUser, () => {
          navigate('/');
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  const goRegister = () => {
    navigate('/register');
  };

  return (
    <div className={classes.wrapper}>
      <aside className={classes.aside}>
        <img src={bgAuth} alt="Background Auth" className={classes.imgAuth} />
      </aside>
      <div className={classes.containForm}>
        <div className={classes.boxForm}>
          <div className={classes.headerForm}>
            <div>
              <span>
                <FormattedMessage id="app_login_title" />
              </span>
            </div>
          </div>
          <form onSubmit={doLogin}>
            <div className={classes.formInput}>
              <label>Email :</label>
              <input type="email" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className={classes.formInput}>
              <label>Password :</label>
              <input type="password" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className={classes.btn}>
              <button type="submit">
                <FormattedMessage id="app_login_title" />
              </button>
            </div>
            <div className={classes.text14}>
              <FormattedMessage id="app_login_text" />
            </div>
            <div className={classes.btn}>
              <button type="button" onClick={goRegister}>
                <FormattedMessage id="app_register_title" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
