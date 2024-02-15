import PropTypes from 'prop-types';
import MenuRounded from '@mui/icons-material/MenuRounded';
import { Grid } from '@mui/material';
import { connect, useDispatch } from 'react-redux';
import { selectProducts } from '@pages/Product/selector';
import { createStructuredSelector } from 'reselect';
import { useEffect } from 'react';
import { getAllProduct } from '@pages/Product/actions';

import classes from './style.module.scss';

const HomeProduct = ({ products }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProduct());
  }, [dispatch]);

  return (
    <div>
      <div className={classes.header}>
        <div className={classes.title}>Product</div>
        <div className={classes.actionNav}>
          <MenuRounded />
        </div>
      </div>

      <div className={classes.productSection}>
        <div className={classes.filter}>
          <div className={classes.subFilter}>
            <div className={classes.titleSection}>
              <div className={classes.title}>Filter</div>
              <div className={classes.reset}>Reset</div>
            </div>
          </div>
          <div className={classes.subFilter}>
            <div className={classes.titleSection}>
              <div className={classes.title}>Drink</div>
            </div>
            <div>
              <input type="checkbox" />
              <label className={classes.label}>Coffee</label>
            </div>
            <div>
              <input type="checkbox" />
              <label className={classes.label}>Non-Coffe</label>
            </div>
          </div>
        </div>

        <Grid container spacing={1}>
          {products?.map((product, index) => (
            <Grid item xs={6} md={4} lg={3} xl={2} key={index}>
              <div className={classes.card}>
                <div className={classes.imageBox}>
                  <img src={product?.image_url} alt="image" className={classes.image} />
                </div>
                <div className={classes.info}>
                  <div className={classes.namePrice}>
                    <div className={classes.name}>{product?.name}</div>
                    <div className={classes.price}>Rp {product?.price}</div>
                  </div>
                  <div className={classes.category}>
                    Category: <b>Coffee</b>
                  </div>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

HomeProduct.propTypes = {
  products: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  products: selectProducts,
});

export default connect(mapStateToProps)(HomeProduct);
