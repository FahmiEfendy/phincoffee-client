import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { Box, Button, Container, Typography } from '@mui/material';

import { showPopup } from '@containers/App/actions';
import { selectCategoryDetail, selectCategoryList, selectCreateCategory, selectUpdateCategory } from './selectors';
import {
  getCategoryDetailRequest,
  getCategoryListRequest,
  patchUpdateCategoryRequest,
  postCreateCategoryRequest,
} from './actions';

import classes from './style.module.scss';

const Category = ({ createCategory, categoryList, categoryDetail, updateCategory }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategoryListRequest());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getCategoryDetailRequest('coffee'));
  }, [dispatch]);

  const addCategoryHandler = () => {
    const payload = {
      name: 'Snack',
      description: 'Delicious snack',
    };

    dispatch(
      postCreateCategoryRequest(payload, () => {
        dispatch(getCategoryListRequest());
      })
    );

    if (createCategory?.isError === null) {
      dispatch(showPopup('global_success', 'category_create_success'));
    }
  };

  const updateCategoryHandler = (id) => {
    const payload = {
      data: {
        description: 'Update Description',
      },
      id,
    };

    // TODO: Update Callback GET Category Detail Later
    dispatch(
      patchUpdateCategoryRequest(payload, () => {
        dispatch(getCategoryListRequest());
      })
    );

    if (updateCategory?.isError === null) {
      dispatch(showPopup('global_success', 'category_update_success'));
    }
  };

  useEffect(() => {
    if (createCategory?.isError !== null || updateCategory?.isError !== null) {
      dispatch(showPopup('global_error', 'global_error_desc'));
    }
  }, [dispatch, createCategory?.isError, updateCategory?.isError]);

  return (
    <Container className={classes.container}>
      <Typography variant="body1">Category</Typography>
      <Button variant="contained" onClick={addCategoryHandler}>
        Test Add Product
      </Button>
      {categoryList?.data?.map((data) => (
        <Box key={data.id} className={classes.list}>
          <Typography variant="body1">{data.name}</Typography>
          <Typography variant="body1">{data.description}</Typography>
          <Button variant="contained" onClick={() => updateCategoryHandler(data.id)}>
            Edit
          </Button>
        </Box>
      ))}
    </Container>
  );
};

Category.propTypes = {
  categoryList: PropTypes.object,
  categoryDetail: PropTypes.object,
  createCategory: PropTypes.object,
  updateCategory: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  categoryList: selectCategoryList,
  categoryDetail: selectCategoryDetail,
  createCategory: selectCreateCategory,
  updateCategory: selectUpdateCategory,
});

export default connect(mapStateToProps)(Category);