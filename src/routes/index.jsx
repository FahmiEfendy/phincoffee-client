import MainLayout from '@layouts/MainLayout';

import Home from '@pages/Home';
import NotFound from '@pages/NotFound';
import Product from '@pages/Product';
import Category from '@pages/Category';

const routes = [
  {
    path: '/',
    name: 'Home',
    protected: false,
    component: Home,
    layout: MainLayout,
  },
  {
    path: '/dashboard/product',
    name: 'Product',
    protected: false,
    component: Product,
    layout: MainLayout,
  },
  {
    path: '/category',
    name: 'Category',
    protected: false,
    component: Category,
    layout: MainLayout,
  },
  { path: '*', name: 'Not Found', component: NotFound, layout: MainLayout, protected: false },
];

export default routes;
