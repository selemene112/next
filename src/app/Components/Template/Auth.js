'use client ';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import './Login.css';

function Template({ children, loginText }) {
  return (
    <div className="login">
      <div className="row h-100">
        <div className="col-md-6 bg-primary d-flex align-items-center justify-content-center">
          <img className="img-fluid" src="/vector01.svg" alt="Illustration" />
        </div>

        <div className="col-md-6 bg-white d-flex align-items-center position-relative">
          <img alt="Illustration" src="/illustration.svg" className="position-absolute translate-middle" style={{ zIndex: 2, top: '30px', left: '10vh' }} />
          <h3 className="position-absolute translate-middle" style={{ zIndex: 2, top: '30px', left: '20vh' }}>
            Ankasa
          </h3>

          <div className="container">
            <div className="row">
              <div className="col-md-6 offset-md-3">
                <h2 className="text-center">{loginText}</h2>
                {children}
                <div className="mb-3">
                  <br />
                  <p1 className="text-center">Did you forget your password?</p1>
                  <br />
                  <Link href="/Pages/Auth/Forget">Tap here for reset</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Template;
