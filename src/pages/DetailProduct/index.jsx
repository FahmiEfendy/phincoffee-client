import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import imgSrc from '../../static/images/coffee.svg';

import classes from './style.module.scss';
import { useNavigate } from 'react-router-dom';


const DetailProduct = ({detailProduct}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    
  }, [dispatch]);

  return (
    <div className={classes.detailContainer}>
      <div className={classes.pageTitle}>Product Detail</div>
      <div className={classes.gridContainer}>
      <div className={classes.gridItem}>
        <div className={classes.imageContainer}>
          <img className={classes.imageProduct} src={imgSrc} alt='product image'/>
        </div>
      </div>
      <div className={classes.gridItem}>
        <h2>Espresso Ice Coffee</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        <h2>Rp 15000</h2>
        <div className={classes.btnCount}>
          <button className={classes.btnPlus}>-</button>
          <div>1</div>
          <button className={classes.btnPlus}>+</button>
        </div>
          <button className={classes.btnAddCart}>Add to Cart</button>
      </div>  
    </div>
    </div>
  );
};

export default DetailProduct;
