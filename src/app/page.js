`use client `;
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import RegisterPage from '@/app/Pages/Auth/Register/page';
import LoginForm from '@/app/Pages/Auth/Login/page';
import NavbarComponent from '@/app/Components/Fragment/Navbar';
import NavbarLogin from './Components/Fragment/NavbarLogin';
import Footer from './Components/Fragment/Footer';
import Landing from './Components/Fragment/Landing';
import Searchresult from '@/app/Components/Organisme/search/search';
import { Box } from './Components/Organisme/SideBar/SideBar';
import Ticket from '@/app/Components/Organisme/search/Search1';
import FixSearch from '@/app/Components/Organisme/search/FixSearch';
import ProfileCard from '@/app/Components/Organisme/Profil/Profil';
function Login() {
  return <Landing />;
}
export default Login;
