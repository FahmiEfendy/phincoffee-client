import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CoffeeIcon from '@mui/icons-material/Coffee';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Avatar, Box, Menu, MenuItem, Typography } from '@mui/material';

import { showPopup } from '@containers/App/actions';
import { selectCategoryList, selectDeleteCategory } from '@pages/Category/selectors';
import { deleteCategoryRequest, getCategoryListRequest } from '@pages/Category/actions';

import classes from './style.module.scss';

const CategoryList = ({ categoryList, deleteCategory, setEditId, setIsModalOpen }) => {
  const dispatch = useDispatch();

  const [menuPosition, setMenuPosition] = useState(null);
  const [openedElement, setOpenedElement] = useState(null);

  const openMenuHandler = (element) => (event) => {
    setEditId(element);
    setOpenedElement(element);
    setMenuPosition(event.currentTarget);
  };

  const closeMenuHandler = () => {
    setMenuPosition(null);
    setOpenedElement(null);
  };

  const editCategoryHandler = () => {
    setIsModalOpen(true);
    closeMenuHandler();
  };

  const deleteCategoryHander = (id) => {
    dispatch(
      showPopup('category_delete', 'category_delete_desc', 'global_delete', () => {
        dispatch(
          deleteCategoryRequest(id, () => {
            dispatch(getCategoryListRequest());

            if (deleteCategory?.isError === null) {
              closeMenuHandler();
              dispatch(showPopup('global_success', 'category_delete_success'));
            }
          })
        );
      })
    );
  };

  useEffect(() => {
    dispatch(getCategoryListRequest());
  }, [dispatch]);

  return categoryList?.data?.length > 0 ? (
    <Box className={classes.category_container}>
      {categoryList?.data?.map((data) => (
        <Box key={data.id} className={classes.category_list}>
          <Box className={classes.menu_wrapper} onClick={openMenuHandler(data.id)}>
            <MoreVertIcon />
          </Box>
          <Menu
            open={openedElement === data.id}
            anchorEl={menuPosition}
            onClose={closeMenuHandler}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <MenuItem onClick={() => editCategoryHandler(data)} className={classes.menu_item}>
              <FormattedMessage id="category_edit" />
            </MenuItem>
            <MenuItem onClick={() => deleteCategoryHander(data.id)}>
              <FormattedMessage id="category_delete" />
            </MenuItem>
          </Menu>
          <Avatar className={classes.category_avatar}>
            <CoffeeIcon />
          </Avatar>
          <Typography variant="body1" className={classes.category_name}>
            {data.name}
          </Typography>
          <Typography variant="body1" className={classes.category_desc}>
            {data.description}
          </Typography>
        </Box>
      ))}
    </Box>
  ) : (
    <Typography variant="body1" className={classes.category_empty}>
      <FormattedMessage id="category_empty" />
    </Typography>
  );
};

CategoryList.propTypes = {
  categoryList: PropTypes.object,
  deleteCategory: PropTypes.object,
  setEditId: PropTypes.func,
  setIsModalOpen: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  categoryList: selectCategoryList,
  deleteCategory: selectDeleteCategory,
});

export default connect(mapStateToProps)(CategoryList);
