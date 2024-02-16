import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import classes from './style.module.scss';



const Order = () => {
  const dispatch = useDispatch();

  useEffect(() => {

  }, [dispatch]);

  return (
    <div className={classes.orderContainer}>
      <div className={classes.pageTitle}>Order</div>
      <div className={classes.listContainer}>
        <div className={classes.card}>
          <div className={classes.header}>
            <div className={classes.title}>
              <div className={classes.comp}>
                <p>1</p>
              </div>
              <div className={classes.date}>
                <p>20 Januari 2024</p>
              </div>
            </div>
            <div className={classes.orderMenu}>
              <p>2x espresso ice coffee</p>
              <p>2x espresso ice coffee</p>
              <p>2x espresso ice coffee</p>
            </div>
            <div className={classes.note}>
              <p>Total: Rp 100000</p>
            </div>
            <div className={classes.statusR}>
              <p>Waiting</p>
            </div>
            </div>
        </div>
        <div className={classes.card}>
          <div className={classes.header}>
            <div className={classes.title}>
              <div className={classes.comp}>
                <p>1</p>
              </div>
              <div className={classes.date}>
                <p>2 January 2024</p>
              </div>
            </div>
            <div className={classes.orderMenu}>
              <p>2x espresso ice coffee</p>
              <p>2x espresso ice coffee</p>
              <p>2x espresso ice coffee</p>
            </div>
            <div className={classes.note}>
              <p>Total: Rp 100000</p>
            </div>
            <div className={classes.statusR}>
              <p>Waiting</p>
            </div>
            </div>
        </div>
      </div>
      
    </div>
  );
};

export default Order;
