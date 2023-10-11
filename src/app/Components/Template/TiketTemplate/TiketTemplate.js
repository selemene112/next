import React from 'react';
import NavbarComponent from '@/app/Components/Fragment/Navbar';
import InputBookingTiket from '../../Organisme/InputBookingTiket/InputBookingTiket';
import TiketbyID from '@/app/Components/Fragment/BokingTiket/TiketbyID/TiketbyID';

import Footer from '@/app/Components/Fragment/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

const TiketTemplate = () => {
  return (
    <div>
      <NavbarComponent />
      <div className="mt-2">
        <div className="card bg-primary text-white h-100 border-bottom-30">
          <div className="card-body d-flex justify-content-between">
            <h5 className="card-title font-weight-bold">Contact Person</h5>
            <h5 className="card-title font-weight-bold " style={{ marginRight: '200px' }}>
              Flight Detail
            </h5>
          </div>
        </div>
      </div>

      <div className="container mt-3">
        <div className="row">
          <div className="col-md-8 border rounded">
            <InputBookingTiket />
          </div>
          <div className="col-md-4 border rounded">
            <TiketbyID />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TiketTemplate;
