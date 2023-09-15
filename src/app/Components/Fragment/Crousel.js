'use client';
import React, { Component } from 'react';
import Slider from 'react-slick';

export default class Carousel extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="bg-primary container">
        <Slider {...settings}>
          <div className="d-flex justify-content-center">
            <div>
              <img src="/img/k11.png" alt="" className="img-fluid " style={{ borderRadius: '100%', border: 'solid #fff', padding: '3%' }} />
              <h4 className="mt-3 text-center">PARIS</h4>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <div>
              <img src="/img/k10.png" alt="" className="img-fluid " style={{ borderRadius: '100%', border: 'solid #fff', padding: '3%' }} />
              <h4 className="mt-3 text-center">PARIS</h4>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <div>
              <img src="/img/k1.png" alt="" className="img-fluid " style={{ borderRadius: '100%', border: 'solid #fff', padding: '3%' }} />
              <h4 className="mt-3 text-center">PARIS</h4>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <div>
              <img src="/img/k2.png" alt="" className="img-fluid " style={{ borderRadius: '100%', border: 'solid #fff', padding: '3%' }} />
              <h4 className="mt-3 text-center">PARIS</h4>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <div>
              <img src="/img/k3.png" alt="" className="img-fluid " style={{ borderRadius: '100%', border: 'solid #fff', padding: '3%' }} />
              <h4 className="mt-3 text-center">PARIS</h4>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <div>
              <img src="/img/k11.png" alt="" className="img-fluid " style={{ borderRadius: '100%', border: 'solid #fff', padding: '3%' }} />
              <h4 className="mt-3 text-center">PARIS</h4>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <div>
              <img src="/img/k10.png" alt="" className="img-fluid " style={{ borderRadius: '100%', border: 'solid #fff', padding: '3%' }} />
              <h4 className="mt-3 text-center">PARIS</h4>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <div>
              <img src="/img/k1.png" alt="" className="img-fluid " style={{ borderRadius: '100%', border: 'solid #fff', padding: '3%' }} />
              <h4 className="mt-3 text-center">PARIS</h4>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <div>
              <img src="/img/k2.png" alt="" className="img-fluid " style={{ borderRadius: '100%', border: 'solid #fff', padding: '3%' }} />
              <h4 className="mt-3 text-center">PARIS</h4>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <div>
              <img src="/img/k3.png" alt="" className="img-fluid " style={{ borderRadius: '100%', border: 'solid #fff', padding: '3%' }} />
              <h4 className="mt-3 text-center">PARIS</h4>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <div>
              <img src="/img/k11.png" alt="" className="img-fluid " style={{ borderRadius: '100%', border: 'solid #fff', padding: '3%' }} />
              <h4 className="mt-3 text-center">PARIS</h4>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <div>
              <img src="/img/k10.png" alt="" className="img-fluid " style={{ borderRadius: '100%', border: 'solid #fff', padding: '3%' }} />
              <h4 className="mt-3 text-center">PARIS</h4>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <div>
              <img src="/img/k1.png" alt="" className="img-fluid " style={{ borderRadius: '100%', border: 'solid #fff', padding: '3%' }} />
              <h4 className="mt-3 text-center">PARIS</h4>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <div>
              <img src="/img/k2.png" alt="" className="img-fluid " style={{ borderRadius: '100%', border: 'solid #fff', padding: '3%' }} />
              <h4 className="mt-3 text-center">PARIS</h4>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <div>
              <img src="/img/k3.png" alt="" className="img-fluid " style={{ borderRadius: '100%', border: 'solid #fff', padding: '3%' }} />
              <h4 className="mt-3 text-center">PARIS</h4>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
