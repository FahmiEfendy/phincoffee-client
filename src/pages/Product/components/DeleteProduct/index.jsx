import { useDispatch } from 'react-redux';

import { Dialog } from '@mui/material';
import { deleteProduct } from '@pages/Product/actions';

import classes from './style.module.scss';

const DeleteProduct = ({ product, isOpen, onClose }) => {
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(
      deleteProduct(product?.id, () => {
        onClose();
      })
    );
  };

  return (
    <Dialog open={isOpen} onClose={onClose} fullWidth>
      <div className={classes.modalContent}>
        <div className={classes.title}>Delete Product</div>

        <div className={classes.info}>This action will delete this data, are you sure?</div>
        <div className={classes.button} onClick={handleSubmit}>
          Submit
        </div>
      </div>
    </Dialog>
  );
};

export default DeleteProduct;
