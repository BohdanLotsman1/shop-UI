import React from 'react';
import { Route } from '../models/route';

const Login = React.lazy(() => import('../../modules/auth/login/index'));
const Register = React.lazy(() => import('../../modules/auth/register/index'));

export default [
  {
    path: '/login',
    exact: true,
    component: Login,
  },  
  {
    path: '/register',
    exact: true,
    component: Register,
  },  
] as Route[];
