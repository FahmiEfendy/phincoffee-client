import MainLayout from '@layouts/MainLayout';

import Home from '@pages/Home';
import DetailProduct from '@pages/DetailProduct';
import Cart from '@pages/Cart';
import Order from '@pages/Order';
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

  {
    path: '/cart',
    name: 'Cart',
    protected: false,
    component: Cart,
    layout: MainLayout,
  },

  {
    path: '/order',
    name: 'Order',
    protected: false,
    component: Order,
    layout: MainLayout,
  },


  { path: '*', name: 'Not Found', component: NotFound, layout: MainLayout, protected: false },
];

export default routes;
