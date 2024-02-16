import MainLayout from '@layouts/MainLayout';

import Home from '@pages/Home';
import Register from '@pages/Register';
import Login from '@pages/Login';
import NotFound from '@pages/NotFound';
import Product from '@pages/Product';
import Category from '@pages/Category';
import HomeProduct from '@pages/HomeProduct';
import AdminLayout from '@layouts/AdminLayout';

const routes = [
  {
    path: '/',
    name: 'Home',
    protected: false,
    component: Home,
    layout: MainLayout,
  },
  {
    path: '/register',
    name: 'Register',
    protected: false,
    component: Register,
    layout: MainLayout,
  },
  {
    path: '/login',
    name: 'Login',
    protected: false,
    component: Login,
    layout: MainLayout,
  },
  {
    path: '/our-products',
    name: 'Our Product',
    protected: false,
    component: HomeProduct,
    layout: MainLayout,
  },
  {
    path: '/dashboard/product',
    name: 'Product',
    protected: true,
    component: Product,
    layout: AdminLayout,
  },
  {
    path: 'dashboard/category',
    name: 'Category',
    protected: true,
    component: Category,
    layout: AdminLayout,
  },
  { path: '*', name: 'Not Found', component: NotFound, layout: MainLayout, protected: false },
];

export default routes;
