'use client';
import React from 'react';

export const DetailFlat = () => {
  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <div className="row mt-3">
            <div className="col">
              <div className="d-flex align-items-center">
                <div className="text-wrapper">Garuda Indonesia</div>
                <img className="garuda-indonesia" alt="Garuda indonesia" src="garuda-indonesia-logo-bd82882f07-seeklogo-1.png" style={{ width: '100px', height: '57px', objectFit: 'cover' }} />
              </div>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col">
              <div className="d-flex align-items-center">
                <div className="btn btn-primary btn-signup">
                  <div className="overlap-group">
                    <div className="text-wrapper-2">Select</div>
                  </div>
                </div>
                <p className="element-pax">
                  <span className="text-info">$ 214,00 </span>
                  <span className="text-wrapper-3">/pax</span>
                </p>
              </div>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col">
              <div className="d-flex">
                <div className="group-4">
                  <img className="btnback" alt="Btnback" src="btnback.svg" style={{ height: '9px', width: '16px' }} />
                  <div className="text-wrapper-4">View Details</div>
                </div>

                <div className="group-5">
                  <div className="text-wrapper-5">IDN</div>
                  <div className="text-wrapper-6">JPN</div>
                  <img className="vector" alt="Vector" src="vector.svg" style={{ height: '18px', width: '19px' }} />
                  <div className="text-wrapper-7">12:33</div>
                  <div className="text-wrapper-8">15:21</div>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col">
              <div className="group-6">
                <div className="text-wrapper-9">(1 transit)</div>
                <div className="text-wrapper-10">3 hours 11 minutes</div>
              </div>
              <img className="img" alt="Group" src="group-684.png" style={{ height: '26px', width: '90px' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
