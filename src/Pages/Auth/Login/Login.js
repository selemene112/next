import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';

import Label from '@/Components/Elements/Label';
import Input from '@/Components/Elements/Input';
import Button from '@/Components/Elements/Button';

const Login = () => {
  return (
    <div className="login">
      <div className="row h-100">
        <div className="col-md-6 bg-primary d-flex align-items-center justify-content-center">
          <img className="img-fluid" src="/vector01.svg" alt="Illustration" />
        </div>

        <div className="col-md-6 bg-white d-flex align-items-center position-relative">
          {/* Gambar illustration selalu di atas bg putih */}
          <img alt="Illustration" src="illustration.svg" className="position-absolute translate-middle" style={{ zIndex: 2, top: '30px', left: '10vh' }} />
          <h3 className="position-absolute translate-middle" style={{ zIndex: 2, top: '30px', left: '20vh' }}>
            Ankasa
          </h3>

          <div className="container">
            <div className="row">
              <div className="col-md-6 offset-md-3">
                <h2 className="text-center">Login</h2>
                <form>
                  <div className="mb-3">
                    <Label htmlFor="email" className="form-label">
                      Email
                    </Label>

                    <Input type="email" id="email" placeholder="Email" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <Input type="password" id="password" placeholder="Password" />
                  </div>
                  <button type="submit" className="btn btn-primary btn-block w-100">
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
