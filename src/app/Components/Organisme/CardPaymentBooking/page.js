'use client';
import React from 'react';
import Link from 'next/link';
import { useRouter, useParams } from 'next/navigation';

const CardPaymentBooking = () => {
  const params = useParams();
  const code = params.code;

  return (
    <div>
      <div className="container  bg-light">
        <div className="row  p-5">
          <div className="col-md-6 border rounded bg-white  mt-5">
            <div className="mt-5 p-2">
              <h5 style={{ fontWeight: 'bold', marginLeft: '100px' }}>Payment Method</h5>

              {/* ================================= This Code For Paypal And Master Card ======================================*/}
              <div className="row bg-light" style={{ marginLeft: '110px' }}>
                <div className="col-md-6 d-flex flex-column justify-content-start">
                  <label className="bg-light fw-bold">Paypal</label>
                  <label className="bg-light fw-bold">Master Card</label>
                </div>
                <div className="col-md-6 d-flex flex-column justify-content-start align-items-end">
                  <img src="/paypal.png" alt="Paypal" className="img-fluid mb-2" style={{ width: '20px', height: '20px' }} />
                  <div className="d-flex">
                    {' '}
                    <img src="/MasterCard.png" alt="Master Card" className="img-fluid mb-2" style={{ width: '20px', height: '20px' }} />
                    <img src="/Visa.png" alt="Visa" className="img-fluid mb-2" style={{ width: '20px', height: '20px' }} />
                  </div>
                </div>
              </div>
              {/* ================================= END COntent This Code For Paypal And Master Card =================================*/}

              <div className="mt-4" style={{ marginLeft: '110px' }}>
                <label className="fw-bold">Card Number</label>

                <div className="d-flex justify-content-start">
                  <img src="/LogoCard.jpeg" alt="Visa" className="img-fluid" style={{ width: '40px', height: '40px' }} />
                  <input type="text" className="form-control" placeholder=" 0000 0000 0000 0000" />
                </div>

                <div className="row mt-3">
                  {' '}
                  <div className=" col-md-6 d-flex justify-content-start mt-3 flex-column">
                    <label className="fw-bold">Expiry Date</label>
                    <input type="date" className="form-control" placeholder="MM/YY" />
                  </div>
                  <div className="col-md-6 d-flex justify-content-start mt-3 flex-column">
                    <label className="fw-bold">CVV</label>
                    <input type="text" className="form-control" placeholder="000" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ================================================================= Content On Right ================================================ */}
          <div className="col-md-6 border border-left-3 rounded bg-white mt-5">
            <div className="mt-5">
              <h5 className="fw-bold">Summary</h5>
              <div className="row mt-3">
                <div className="col-md-6 d-flex flex-column">
                  <label className="fw-bold">Pro Bill Mountly </label>
                  <label className="fw-bold mt-3"> Referal Bonus</label>
                  <label className="fw-bold mt-3"> Total</label>
                  <label className=" "> Payment after 1 Mountly</label>
                </div>
                <div className="col-md-6 d-flex flex-column">
                  {' '}
                  <label className="fw-bold d-flex justify-content-end"> $ 100</label>
                  <label className="fw-bold d-flex justify-content-end mt-3"> -$ 2</label>
                  <label className="fw-bold d-flex justify-content-end mt-3"> $ 98</label>
                </div>
              </div>
              <Link href={`/Pages/Books/TiketPaymentBarcode/${code}`}>
                {' '}
                <button className="btn btn-primary mt-5 w-100">Pay Now</button>
              </Link>
            </div>
          </div>
          {/*============================================================== END COntent On Right ================================================ */}
        </div>
      </div>
    </div>
  );
};

export default CardPaymentBooking;
