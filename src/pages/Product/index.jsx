import PropTypes from 'prop-types';
import { AddRounded, DeleteRounded, EditRounded } from '@mui/icons-material';
import { useEffect } from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { connect, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect/es';
import { getAllProduct } from './actions';
import { selectProducts } from './selector';

import classes from './style.module.scss';

const Product = ({ products }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProduct());
  }, [dispatch]);

  return (
    <div className={classes.card}>
      <div className={classes.title}>Product Management</div>

      <div>
        <div className={classes.createBtn}>
          <AddRounded />
          Create
        </div>
      </div>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>No</TableCell>
            <TableCell>Image</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Price</TableCell>
            {/* <TableCell>Category</TableCell> */}
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products?.map((product, index) => (
            <TableRow key={index}>
              <TableCell>{index}</TableCell>
              <TableCell>
                <img src={product?.image_url} alt="img" className={classes.image} />
              </TableCell>
              <TableCell>{product?.name}</TableCell>
              <TableCell>{product?.price}</TableCell>
              <TableCell>
                <div className={classes.action}>
                  <div className={classes.edit}>
                    <EditRounded style={{ width: 18, color: '#fff' }} />
                  </div>
                  <div className={classes.delete}>
                    <DeleteRounded style={{ width: 18, color: '#fff' }} />
                  </div>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

Product.propTypes = {
  products: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  products: selectProducts,
});

export default connect(mapStateToProps)(Product);
