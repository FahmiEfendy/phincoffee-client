import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import imgSrc from '../../static/images/coffee.svg';

import classes from './style.module.scss';



const Cart = () => {
  const dispatch = useDispatch();

  useEffect(() => {

  }, [dispatch]);

  return (
    <div className={classes.basket}>
      <div className={classes.product}>
        <div className={classes.categoryTitle}>
          Cart
        </div>

        <div className={classes.cartContainer}>
          <div className={classes.productContainer}>
            <div className={classes.card}>
              <div className={classes.imgCont}>
                <img src={imgSrc} alt="img" />
              </div>
              <div className={classes.content}>
                <div className={classes.productDetails}>
                  <div className={classes.titleCont}>
                    <div className={classes.title}>Expresso Ice coffee</div>
                    <div className={classes.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, .</div>
                  </div>
                  <div className={classes.price}>Rp 15000</div>
                </div>
                <div className={classes.actionCard}>
                  <div className={classes.btnCont}>
                    <button className={classes.btnPlus}>-</button>
                    <div className={classes.qty}>1</div>
                    <button className={classes.btnPlus} >+</button>
                  </div>
                </div>
            </div>
            
          </div>      

          <div className={classes.productContainer}>
            <div className={classes.card}>
              <div className={classes.imgCont}>
                <img src={imgSrc} alt="img" />
              </div>
              <div className={classes.content}>
                <div className={classes.productDetails}>
                  <div className={classes.titleCont}>
                    <div className={classes.title}>Expresso Ice coffee</div>
                    <div className={classes.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, .</div>
                  </div>
                  <div className={classes.price}>Rp 15000</div>
                </div>
                <div className={classes.actionCard}>
                  <div className={classes.btnCont}>
                    <button className={classes.btnPlus}>-</button>
                    <div className={classes.qty}>1</div>
                    <button className={classes.btnPlus} >+</button>
                  </div>
                </div>
            </div>
            
          </div>  
          </div>  
        </div>

        <div className={classes.totalContainer}>
          <div className={classes.paySum}>
            <div className={classes.total}>
              <div className={classes.text}>
                <p className={classes.totalTitle}>Total</p>
                Rp 150000
              </div>
            </div>
            <div className={classes.btnCont}>
            <button>
              Pesan
            </button>
            </div>
          </div>
        </div>
      </div>
        

        
    </div>     
  </div>
  );
};

export default Cart;
