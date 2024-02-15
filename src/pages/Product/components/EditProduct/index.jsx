import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

import { Dialog } from '@mui/material';

import classes from './style.module.scss';
import { editProduct } from '@pages/Product/actions';

const EditProduct = ({ product, isOpen, onClose }) => {
  const [imgPreview, setImgPreview] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    setError('');
    setImgPreview(product?.image_url);
    setName(product?.name);
    setDescription(product?.description);
    setPrice(product?.price);
    setCategoryId(product?.category_id);
  }, [product, isOpen]);

  const handleUploadImage = (event) => {
    const image = event.target.files[0];
    setImageUrl(image);
    const imagePreview = URL.createObjectURL(image);
    setImgPreview(imagePreview);
  };

  const handleSubmit = () => {
    const payload = {
      name,
      description,
      price,
      category_id: categoryId,
      ...(imageUrl && { image_url: imageUrl }),
    };
    dispatch(
      editProduct(
        payload,
        product.id,
        () => {
          onClose();
        },
        (err) => {
          setError(err.message);
        }
      )
    );
  };

  return (
    <Dialog open={isOpen} onClose={onClose} fullWidth>
      <div className={classes.modalContent}>
        <div className={classes.title}>Edit Product</div>

        {error && <div className={classes.error}>{error}</div>}

        <div className={classes.inputSection}>
          <div className={classes.formControl}>
            <div className={classes.uploadBox}>
              {imgPreview && (
                <div className={classes.previewBox}>
                  <img src={imgPreview} alt="img_preview" className={classes.imgPreview} />
                </div>
              )}
              <div className={classes.label}>File</div>
              <input type="file" onChange={handleUploadImage} />
            </div>
          </div>
          <div className={classes.formControl}>
            <div className={classes.label}>Name</div>
            <input
              className={classes.input}
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className={classes.formControl}>
            <div className={classes.label}>Description</div>
            <input
              className={classes.input}
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </div>
          <div className={classes.formControl}>
            <div className={classes.label}>Price</div>
            <input
              className={classes.input}
              type="number"
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
          </div>
          <div className={classes.formControl}>
            <div className={classes.label}>Category</div>
            <select
              className={classes.input}
              value={categoryId}
              onChange={(e) => {
                setCategoryId(e.target.value);
              }}
            >
              <option value="1">Coffee</option>
              <option value="2">Non-Coffee</option>
            </select>
          </div>

          <div className={classes.button} onClick={handleSubmit}>
            Submit
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default EditProduct;
