import React from 'react';
import { useDispatch } from 'react-redux';
import { Avatar, Box } from '@mui/material';

import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import { setLogin, setToken } from '@containers/Client/actions';
import { useNavigate } from 'react-router-dom';

import classes from './style.module.scss';
import { EmojiFoodBeverageRounded, LocalMallRounded, MenuBookRounded } from '@mui/icons-material';

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(setLogin(false));
    dispatch(setToken(null));
  };

  return (
    <div>
      <Box className={classes.drawer} sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
        <div className={classes.user}>
          <Avatar alt="Remy Sharp" src="" sx={{ marginBottom: 2 }} />
          <p className={classes.name}>Farras</p>
          <p className={classes.major}>Admin</p>
        </div>

        <div className={classes.menu}>
          <div
            className={classes.item}
            onClick={() => {
              navigate('/dashboard/product');
            }}
          >
            <EmojiFoodBeverageRounded />
            Product
          </div>
          <div
            className={classes.item}
            onClick={() => {
              navigate('/dashboard/category');
            }}
          >
            <MenuBookRounded />
            Category
          </div>
          <div
            className={classes.item}
            onClick={() => {
              handleSelect('dashboard');
              navigate('/course');
            }}
          >
            <LocalMallRounded />
            Order
          </div>
          <div className={classes.item} onClick={handleLogout}>
            <LogoutRoundedIcon />
            Logout
          </div>
        </div>
      </Box>
    </div>
  );
};

export default Sidebar;
