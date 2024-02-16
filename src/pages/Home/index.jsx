import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';

import { Box, Button } from '@mui/material';
import LocalMallRounded from '@mui/icons-material/LocalMallRounded';
import { getAllProduct } from '@pages/Product/actions';
import { createStructuredSelector } from 'reselect';
import { selectProducts } from '@pages/Product/selector';
import { useNavigate } from 'react-router-dom';
import { selectLogin } from '@containers/Client/selectors';

import classes from './style.module.scss';

const Home = ({ products, isLogin }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllProduct());
  }, [dispatch]);

  return (
    <div>
      <div className={classes.banner}>
        <div className={classes.navMobile}>
          <div className={classes.title}>Phincoffee</div>
          <div className={classes.burger}>
            {!isLogin && (
              <Button
                variant="contained"
                type="button"
                onClick={() => navigate('/login')}
                sx={{ padding: '.2rem 1rem', textTransform: 'capitalize', fontFamily: 'Poppins' }}
              >
                Login
              </Button>
            )}
          </div>
        </div>
        <div className={classes.hero}>
          <div className={classes.slogan}>CODE NEVER BE BETTER</div>
          <div className={classes.subSlogan}>WITHOUT COFFEE</div>
        </div>
      </div>

      <div className={classes.productSection}>
        <div>
          <div className={classes.header}>Our Products</div>
        </div>

        <Box className={classes.item}>
          {products?.map((product, index) => (
            <div>
              <div className={classes.boxImage}>
                <div className={classes.actionCart}>
                  <LocalMallRounded color="inherit" />
                </div>
                <div className={classes.imgSection}>
                  <img src={product.image_url} alt="" className={classes.image} />
                </div>
              </div>
              <div className={classes.info}>
                <div className={classes.namePrice}>
                  <div className={classes.name}>{product.name}</div>
                  <div className={classes.price}>Rp {product.price}</div>
                </div>
                <div className={classes.category}>
                  Category: <b>{product?.category?.name}</b>
                </div>
              </div>
            </div>
          ))}
        </Box>

        <div className={classes.more} onClick={() => navigate('/our-products')}>
          <div className={classes.button}>View More</div>
        </div>
      </div>
    </div>
  );
};

Home.propTypes = {
  products: PropTypes.array,
  isLogin: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  products: selectProducts,
  isLogin: selectLogin,
});

export default connect(mapStateToProps)(Home);
