import { useDispatch } from 'react-redux';
import { useState } from 'react';

import classes from './style.module.scss';

const CreateProduct = () => {
  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState(0);
  const dispatch = useDispatch();

  return (
    <div>
      <div>Create Product</div>

      <div className={classes.inputSection}>
        <div className={classes.formControl}>
          <div className={classes.uploadBox}>
            <input type="file" />
          </div>
        </div>
        <div className={classes.formControl}>
          <div>Name</div>
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className={classes.formControl}>
          <div>Description</div>
          <textarea id="" cols="30" rows="10" />
        </div>
        <div className={classes.formControl}>
          <div>Price</div>
          <input
            type="text"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </div>
        <div className={classes.formControl}>
          <div>Category</div>
          <select
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          >
            <option value="">Coffee</option>
            <option value="">Non-Coffee</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
