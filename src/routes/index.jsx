import MainLayout from '@layouts/MainLayout';

import Home from '@pages/Home';
import DetailProduct from '@pages/DetailProduct';
import NotFound from '@pages/NotFound';

const routes = [
  {
    path: '/',
    name: 'Home',
    protected: false,
    component: Home,
    layout: MainLayout,
  },

  {
    path: '/product-details',
    name: 'DetailProduct',
    protected: false,
    component: DetailProduct,
    layout: MainLayout,
  },
  { path: '*', name: 'Not Found', component: NotFound, layout: MainLayout, protected: false },
];

export default routes;
