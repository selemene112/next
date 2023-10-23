import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Carousel from './Crousel';

import Footer from './Footer';
import NavbarLogin from './NavbarLogin';

export default function Landing() {
  return (
    <div className="p-5">
      <NavbarLogin />
      <div className="row mt-5 d-flex justify-content-between">
        <div className="col-6 ">
          <div className="p-5">
            <h1>
              Find your{' '}
              <a style={{ textDecoration: 'none' }} className="text-primary">
                Flight
              </a>
            </h1>
            <p>and explor the word with us</p>
          </div>
          <img src="/img/k8.png" alt="" className="img-fluid" />
        </div>
        <div className="col-6 d-flex flex-column ">
          <div className="d-flex justify-content-end">
            <img src="/img/k7.png" alt="" className="img-fluid " />
          </div>
          <div className="d-flex justify-content-end">
            <img src="/img/i3.png" alt="" className="p-lg-5 p-3 img-fluid" />
          </div>
        </div>
      </div>
      <div className="container">
        <h5 className="text-primary mt-5">TRENDING</h5>
        <div className="d-flex justify-content-between mb-5">
          <h3>Trending destinations</h3>
          <h5 className="text-primary">View All</h5>
        </div>
        {/* card */}
        <div className="row mb-5 justify-content-between ">
          <div style={{ width: '216px', height: '275px' }} className="col-lg-2 col-6 mb-5">
            <div className="card p-3 shadow p-2 mb-3 bg-body rounded">
              <img src="/img/k5.png" className="card-img-top img-fluid" alt="" style={{ width: '354px', height: '174px' }} />
              <div className="card-body ">
                <h5>Tokyo,</h5>
                <div className="d-flex justify-content-between">
                  <h3>Japan</h3>
                  <button className="btn rounded-pill">
                    <img src="/img/i1.png" alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-6 mb-5" style={{ width: '216px', height: '275px' }}>
            <div className="card p-3 shadow p-2 mb-3 bg-body rounded">
              <img src="/img/k9.png" className="img-fluid card-img-top" alt="" style={{ width: '354px', height: '174px' }} />
              <div className="card-body ">
                <h5>Tokyo,</h5>
                <div className="d-flex justify-content-between">
                  <h3>Japan</h3>
                  <button className="btn rounded-pill">
                    <img src="/img/i1.png" alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-6 mb-5" style={{ width: '216px', height: '275px' }}>
            <div className="card p-3 shadow p-2 mb-3 bg-body rounded">
              <img src="/img/k2.png" className="img-fluid card-img-top" alt="" style={{ width: '354px', height: '174px' }} />
              <div className="card-body ">
                <h5>Tokyo,</h5>
                <div className="d-flex justify-content-between">
                  <h3>Japan</h3>
                  <button className="btn rounded-pill">
                    <img src="/img/i1.png" alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div style={{ width: '216px', height: '275px' }} className="col-lg-2 col-6 mb-5">
            <div className="card p-3 shadow p-2 mb-3 bg-body rounded">
              <img src="/img/k9.png" className="img-fluid card-img-top" alt="" style={{ width: '354px', height: '174px' }} />
              <div className="card-body ">
                <h5>Tokyo,</h5>
                <div className="d-flex justify-content-between">
                  <h3>Japan</h3>
                  <button className="btn rounded-pill">
                    <img src="/img/i1.png" alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div style={{ width: '216px', height: '275px' }} className="col-lg-2 col-6 mb-5">
            <div className="card p-3 shadow p-2 mb-3 bg-body rounded">
              <img src="/img/k3.png" className="img-fluid card-img-top" alt="" style={{ width: '354px', height: '174px' }} />
              <div className="card-body ">
                <h5>Tokyo,</h5>
                <div className="d-flex justify-content-between">
                  <h3>Japan</h3>
                  <button className="btn rounded-pill">
                    <img src="/img/i1.png" alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-primary" style={{ borderRadius: '7%' }}>
          <div className="container px-5 py-4 text-center text-white">
            <p>TOP 10</p>
            <h3>Top 10 destinations</h3>
            <div className="row d-flex justify-content-between  p-3">
              <Carousel />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
