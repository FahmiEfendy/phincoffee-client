import PropTypes from 'prop-types';
import { AddRounded, DeleteRounded, EditRounded } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { connect, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect/es';
import { getAllProduct } from './actions';
import { selectProducts } from './selector';

import classes from './style.module.scss';
import CreateProduct from './components/CreateProduct';
import EditProduct from './components/EditProduct';
import DeleteProduct from './components/DeleteProduct';

const Product = ({ products }) => {
  const dispatch = useDispatch();
  const [product, setProduct] = useState({});
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  useEffect(() => {
    dispatch(getAllProduct());
  }, [dispatch]);

  const handleOpenCreate = () => {
    setIsCreateOpen(!isEditOpen);
  };

  const handleOpenEdit = () => {
    setIsEditOpen(!isEditOpen);
  };

  const handleOpenDelete = () => {
    setIsDeleteOpen(!isDeleteOpen);
  };

  return (
    <div className={classes.layout}>
      <div className={classes.card}>
        <div className={classes.title}>Product Management</div>

        <div>
          <div className={classes.createBtn} onClick={handleOpenCreate}>
            <AddRounded />
            Create
          </div>
          <CreateProduct
            isOpen={isCreateOpen}
            onClose={() => {
              setIsCreateOpen(false);
            }}
          />
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
                    <div
                      className={classes.edit}
                      onClick={() => {
                        setProduct(product);
                        handleOpenEdit();
                      }}
                    >
                      <EditRounded style={{ width: 18, color: '#fff' }} />
                    </div>
                    <div
                      className={classes.delete}
                      onClick={() => {
                        setProduct(product);
                        handleOpenDelete();
                      }}
                    >
                      <DeleteRounded style={{ width: 18, color: '#fff' }} />
                    </div>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <EditProduct
          product={product}
          isOpen={isEditOpen}
          onClose={() => {
            setIsEditOpen(false);
          }}
        />

        <DeleteProduct
          product={product}
          isOpen={isDeleteOpen}
          onClose={() => {
            setIsDeleteOpen(false);
          }}
        />
      </div>
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
