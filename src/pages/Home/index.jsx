import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import MenuRounded from '@mui/icons-material/MenuRounded';
import LocalMallRounded from '@mui/icons-material/LocalMallRounded';
import { getAllProduct } from '@pages/Product/actions';
import { createStructuredSelector } from 'reselect';
import { selectProducts } from '@pages/Product/selector';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import classes from './style.module.scss';

const Home = ({ products }) => {
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
            <MenuRounded />
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
                  Category: <b>Coffee</b>
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
};

const mapStateToProps = createStructuredSelector({
  products: selectProducts,
});

export default connect(mapStateToProps)(Home);
