/* eslint-disable jsx-a11y/label-has-associated-control */
// import React from 'react'
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import toast, { Toaster } from 'react-hot-toast';
import { jwtDecode } from 'jwt-decode';

import { selectToken } from '@containers/Client/selectors';
import { logout } from '@utils/logout';
import { getProfile, setProfile } from './actions';
import { selectProfile } from './selector';

import classes from './style.module.scss';

const Profile = ({ profile, token }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const doSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('username', username);
    formData.append('email', email);
    console.log([...formData]);

    try {
      dispatch(
        setProfile(formData, (message) => {
          toast.success(`${message} | You will redirect to logout`, { duration: 2000 });
          setTimeout(() => logout(dispatch, navigate), 3000);
          setLoading(true);
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (profile) {
      setUsername(profile?.username);
      setEmail(profile?.email);
    }
  }, [profile]);

  useEffect(() => {
    const decode = jwtDecode(token);
    dispatch(getProfile(decode.id));
  }, [dispatch, token]);

  return (
    <div className={classes.wrapper}>
      <form onSubmit={doSubmit}>
        <div className={classes.boxInput}>
          <div className={classes.formInput}>
            <label>Username</label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className={classes.formInput}>
            <label>Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
        </div>
        <div className={classes.btnSave}>
          <button type="submit" disabled={loading}>
            Save Change
          </button>
        </div>
      </form>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

Profile.propTypes = {
  profile: PropTypes.object,
  token: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  profile: selectProfile,
  token: selectToken,
});

export default connect(mapStateToProps)(Profile);
