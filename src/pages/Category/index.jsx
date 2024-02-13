import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCategoryList } from './selectors';
import { getCategoryListRequest } from './actions';

const Category = ({ categoryList }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategoryListRequest());
  }, [dispatch]);

  console.log(categoryList, '<<< Category List');

  return <>Category</>;
};

Category.propTypes = {
  categoryList: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  categoryList: selectCategoryList,
});

export default connect(mapStateToProps)(Category);
