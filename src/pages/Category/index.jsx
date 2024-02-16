import { useState } from 'react';
import { FormattedMessage } from 'react-intl';

import { Box, Button, Container, Typography } from '@mui/material';

import CategoryList from './components/CategoryList';
import CategoryModal from './components/CategoryModal';

import classes from './style.module.scss';

const Category = () => {
  const [editId, setEditId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModalHandler = () => {
    setIsModalOpen(true);
  };

  const closeModalHandler = () => {
    setIsModalOpen(false);
    setEditId(null);
  };

  return (
    <>
      <Container data-testid="category-container" className={classes.container}>
        <Typography variant="body1" className={classes.header}>
          <FormattedMessage id="category_header" />
        </Typography>
        <Box className={classes.button_wrapper}>
          <Button variant="contained" onClick={openModalHandler} className={classes.button}>
            <FormattedMessage id="category_create" />
          </Button>
        </Box>
        <CategoryList setEditId={setEditId} setIsModalOpen={setIsModalOpen} />
      </Container>

      {isModalOpen && <CategoryModal isOpen={isModalOpen} onClose={closeModalHandler} editId={editId} />}
    </>
  );
};

export default Category;
