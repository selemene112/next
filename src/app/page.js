`use client `;
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import RegisterPage from '@/app/Pages/Auth/Register/page';
import LoginForm from '@/app/Pages/Auth/Login/page';
import NavbarComponent from '@/app/Components/Fragment/Navbar';
import NavbarLogin from './Components/Fragment/NavbarLogin';
import Footer from './Components/Fragment/Footer';
import Landing from './Components/Fragment/Landing';

function Login() {
  return <NavbarLogin />;
}
export default Login;
