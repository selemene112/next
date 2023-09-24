import React from 'react';
import NavbarLogin from '@/app/Components/Fragment/NavbarLogin';

const Searchresult = () => {
  return (
    <div className="container">
      {/* Navbar */}
      <NavbarLogin />

      {/* Content */}
      <div className="row mt-4">
        {/* Left Sidebar */}
        <div className="col-md-3">
          <div className="list-group">
            <a href="#" className="list-group-item list-group-item-action">
              Select Ticket
            </a>
            <a href="#" className="list-group-item list-group-item-action">
              Filter
            </a>
            {/* Add more items as needed */}
          </div>
        </div>

        {/* Flight Details */}
        <div className="col-md-9">
          {/* Flight Cards */}
          <div className="card mb-3">
            <div className="row no-gutters">
              <div className="col-md-3">
                <img src="garuda-indonesia-logo.png" className="card-img" alt="Garuda Indonesia Logo" />
              </div>
              <div className="col-md-9">
                <div className="card-body">
                  <h5 className="card-title">Garuda Indonesia</h5>
                  <p className="card-text">$214,00 /pax</p>
                  <p className="card-text">(1 transit)</p>
                  {/* Add more flight details as needed */}
                </div>
              </div>
            </div>
          </div>
          {/* Add more flight cards as needed */}
        </div>
      </div>
    </div>
  );
};

export default Searchresult;
