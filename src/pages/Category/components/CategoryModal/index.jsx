import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { Box, Button, FormControl, FormLabel, Modal, TextField, Typography } from '@mui/material';

import { showPopup } from '@containers/App/actions';
import { selectCategoryDetail, selectCreateCategory, selectUpdateCategory } from '@pages/Category/selectors';
import {
  getCategoryDetailRequest,
  getCategoryListRequest,
  patchUpdateCategoryRequest,
  postCreateCategoryRequest,
} from '@pages/Category/actions';

import classes from './style.module.scss';

const CategoryModal = ({ categoryDetail, createCategory, updateCategory, isOpen, onClose, editId }) => {
  const dispatch = useDispatch();

  const [name, setName] = useState({ value: '', isValid: true });
  const [description, setDescription] = useState({ value: '', isValid: true });

  const formValidation = () => {
    let isFormValid = true;

    if (name.value === '') {
      setName((prevState) => ({ ...prevState, isValid: false }));
      isFormValid = false;
    } else if (description.isValid) {
      setDescription((prevState) => ({ ...prevState, isValid: false }));
      isFormValid = false;
    }

    return isFormValid;
  };

  const addCategoryHandler = () => {
    const isFormValid = formValidation();

    if (!isFormValid) return;

    const payload = {
      name,
      description,
    };

    dispatch(
      postCreateCategoryRequest(payload, () => {
        onClose();
        dispatch(getCategoryListRequest());
      })
    );

    if (createCategory?.isError === null) {
      onClose();
      dispatch(showPopup('global_success', 'category_create_success'));
    }
  };

  const updateCategoryHandler = (id) => {
    const payload = {
      data: {
        description,
      },
      id,
    };

    dispatch(
      patchUpdateCategoryRequest(payload, () => {
        dispatch(getCategoryListRequest());
      })
    );

    if (updateCategory?.isError === null) {
      onClose();
      dispatch(showPopup('global_success', 'category_update_success'));
    }
  };

  useEffect(() => {
    if (editId) {
      dispatch(getCategoryDetailRequest(editId));
    }
  }, [dispatch, editId]);

  useEffect(() => {
    if (categoryDetail?.data?.name) {
      setName(categoryDetail?.data?.name);
      setDescription(categoryDetail?.data?.description);
    }
  }, [categoryDetail?.data, dispatch, editId]);

  // TODO: Fix Clear State
  // useEffect(() => {
  //   if (createCategory?.isError !== null) {
  //     dispatch(showPopup('global_error', 'global_error_desc'));
  //   }
  // }, [createCategory?.isError, dispatch]);

  return (
    <Modal open={isOpen} onClose={onClose} className={classes.modal_container_outer}>
      <Box className={classes.modal_container}>
        <Typography variant="h5" className={classes.header}>
          {editId ? <FormattedMessage id="category_edit" /> : <FormattedMessage id="category_create" />}
        </Typography>
        <FormControl className={classes.input_container}>
          <Box className={classes.input_wrapper}>
            <FormLabel className={classes.input_label}>
              <FormattedMessage id="category_name" />
            </FormLabel>
            {!name.isValid && (
              <FormLabel className={classes.input_label_error}>
                <FormattedMessage id="category_name_error_required" />
              </FormLabel>
            )}
            <TextField
              type="text"
              value={name.value}
              onChange={(e) => setName({ value: e.target.value, isValid: e.target.value.length > 0 })}
              disabled={Boolean(editId)}
            />
          </Box>
          <Box className={classes.input_wrapper}>
            <FormLabel className={classes.input_label}>
              <FormattedMessage id="category_desc" />
            </FormLabel>
            {!description.isValid && (
              <FormLabel className={classes.input_label_error}>
                <FormattedMessage id="category_desc_error_required" />
              </FormLabel>
            )}
            <TextField
              type="text"
              value={description.value}
              onChange={(e) => setDescription({ value: e.target.value, isValid: e.target.value.length > 0 })}
            />
          </Box>
          <Box className={classes.button_wrapper}>
            <Button variant="outlined" onClick={onClose}>
              <FormattedMessage id="global_cancel" />
            </Button>
            {editId ? (
              <Button variant="contained" onClick={() => updateCategoryHandler(editId)}>
                <FormattedMessage id="global_update" />
              </Button>
            ) : (
              <Button variant="contained" onClick={addCategoryHandler}>
                <FormattedMessage id="global_create" />
              </Button>
            )}
          </Box>
        </FormControl>
      </Box>
    </Modal>
  );
};

CategoryModal.propTypes = {
  categoryDetail: PropTypes.object,
  createCategory: PropTypes.object,
  updateCategory: PropTypes.object,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  editId: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  categoryDetail: selectCategoryDetail,
  createCategory: selectCreateCategory,
  updateCategory: selectUpdateCategory,
});

export default connect(mapStateToProps)(CategoryModal);
