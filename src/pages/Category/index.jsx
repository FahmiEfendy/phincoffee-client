import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCategoryDetail, selectCategoryList } from './selectors';
import { getCategoryDetailRequest, getCategoryListRequest } from './actions';

const Category = ({ categoryList, categoryDetail }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategoryListRequest());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getCategoryDetailRequest('coffee'));
  }, [dispatch]);

  console.log(categoryList, '<<< Category List');
  console.log(categoryDetail, '<<< Category Detail');

  return <>Category</>;
};

Category.propTypes = {
  categoryList: PropTypes.object,
  categoryDetail: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  categoryList: selectCategoryList,
  categoryDetail: selectCategoryDetail,
});

export default connect(mapStateToProps)(Category);
