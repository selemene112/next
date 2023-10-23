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
import TiketTemplate from '../app/Components/Template/TiketTemplate/TiketTemplate';
import Ticket from '@/app/Components/Organisme/search/Search1';
import FixSearch from '@/app/Components/Organisme/search/FixSearch';
import ProfileCard from '@/app/Components/Organisme/Profil/Profil';
// import SearchBooking from '@/app/Components/Organisme/SearchBoxing';
import FormContactPerson from './Components/Fragment/BokingTiket/ContactPerson/ContactPerson';
import TiketbyID from './Components/Fragment/BokingTiket/TiketbyID/TiketbyID';
import TiketDetailBooking from './Pages/Books/BookingDetailTiket/[code]/page.js';
import InputBookingTiket from './Components/Organisme/InputBookingTiket/InputBookingTiket';
import TiketPayment from './Components/Template/TiketPayment/TiketPayment';

import CardPaymentBooking from './Components/Organisme/CardPaymentBooking/page';
import PaymentBookingPass from './Components/Organisme/PaymentBookingPass/page';
import CardBookingTiketStatus from './Components/Organisme/CardBokingTiketstatus/page';

function Login() {
  return <CardBookingTiketStatus />;
}
export default Login;
