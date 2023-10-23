import React from 'react';
import Link from 'next/link';
import NavbarLogin from '@/app/Components/Fragment/NavbarLogin';
import Footer from '@/app/Components/Fragment/Footer';

function TiketPayment({ children }) {
  return (
    <div>
      <NavbarLogin />
      <div className="height-650 d-flex align-items-center justify-content-center vh-100 bg-primary">
        {/* <div className="vh-100">Content of your component</div> */}
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default TiketPayment;
