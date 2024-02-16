import MainLayout from '@layouts/MainLayout';

import Home from '@pages/Home';
import Register from '@pages/Register';
import Login from '@pages/Login';
import Profile from '@pages/Profile';
import DetailProduct from '@pages/DetailProduct';
import Cart from '@pages/Cart';
import Order from '@pages/Order';
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
  },
  {
    path: '/register',
    name: 'Register',
    protected: false,
    component: Register,
  },
  {
    path: '/login',
    name: 'Login',
    protected: false,
    component: Login,
  },
  {
    path: '/profile',
    name: 'Profile',
    protected: false,
    component: Profile,
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
