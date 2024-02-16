import PropTypes from 'prop-types';
import MenuRounded from '@mui/icons-material/MenuRounded';
import { Grid } from '@mui/material';
import { connect, useDispatch } from 'react-redux';
import { selectProducts } from '@pages/Product/selector';
import { createStructuredSelector } from 'reselect';
import { useEffect, useState } from 'react';
import { getAllProduct, setAllProduct } from '@pages/Product/actions';

import classes from './style.module.scss';
import { selectCategoryList } from '@pages/Category/selectors';
import { getCategoryListRequest } from '@pages/Category/actions';

const HomeProduct = ({ products, categories }) => {
  const [category, setCategory] = useState();
  const dispatch = useDispatch();

  console.log(categories);

  useEffect(() => {
    dispatch(getAllProduct());
    dispatch(getCategoryListRequest({}));
  }, [dispatch]);

  const handleFilter = (event) => {
    dispatch(
      getAllProduct({ category: event.target.value }, (err) => {
        if (err.statusCode === 404) {
          dispatch(setAllProduct([]));
        }
      })
    );
    console.log(products);
  };

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
              <div className={classes.title}>Category</div>
            </div>
            {categories?.data?.map((category) => (
              <div>
                <input type="radio" value={category.name} name="category" onChange={handleFilter} />
                <label className={classes.label}>{category.name}</label>
              </div>
            ))}
          </div>
        </div>

        <Grid container spacing={1}>
          {products.length !== 0 &&
            products?.map((product, index) => (
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
                      Category: <b>{product.category.name}</b>
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
  categories: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  products: selectProducts,
  categories: selectCategoryList,
});

export default connect(mapStateToProps)(HomeProduct);
