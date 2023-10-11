'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';

import './ModulTiketbyId.css';

const TiketbyID = () => {
  const router = useRouter();
  const params = useParams();
  const code = params.code;

  const [flightData, setFlightData] = useState(null);
  const [Flight, setFlight] = useState(null);

  const fetchData = async () => {
    try {
      if (code) {
        const response = await fetch(`https://easy-lime-seal-toga.cyclic.app/airlines/flight/${code}`);
        const data = await response.json();
        setFlightData(data.data);
        setFlight(data?.data);
        console.log(data.data);
        console.log('Flight data:', data);
      }
    } catch (error) {
      console.error('Error fetching flight data:', error);
    }
  };

  // Panggil fetchData ketika komponen dimount atau 'code' berubah
  useEffect(() => {
    fetchData();
  }, [code]);

  // ==================================================== Get Time  =====================================
  const extractTime = (timestamp) => {
    const date = new Date(timestamp);
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  //===================================================== End Time -=======================================================
  // ===================================================== For View Date ======================================================
  const formatDate = (date) => {
    const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
    return new Date(date).toLocaleDateString('en-US', options);
  };
  // ====================================================== End View Data =========================================================
  return (
    <div className="box">
      <div className="group">
        <div className="div">
          <div className="group-2">
            <div className="group-3">
              <div className="text-wrapper">{Flight?.name}</div>
              <img className="garuda-indonesia" alt="Garuda indonesia" src={Flight?.photo} />
            </div>
            <div className="group-4">
              <div className="group-5">
                <div className="text-wrapper-2">
                  <h5 className="col-md-12 mt-0 mb-0">{Flight?.from?.country}</h5>
                  <h5 className="col-md-12 mt-0 mb-0"> ( {Flight?.from?.code})</h5>
                </div>
                <div className="text-wrapper-3">
                  <h5 className="col-md-12 mt-0 mb-0">{Flight?.to?.country}</h5>

                  <h5 className="col-md-12 mt-0 mb-0">({Flight?.to?.code})</h5>
                </div>
                <img className="vector" alt="Vector" src="/Vector.svg" />
              </div>
              <div className="group-6">
                <div className="text-wrapper-4">{Flight ? `${extractTime(Flight?.landing)} - ${extractTime(Flight?.takeoff)}` : ''}</div>
                <div className="text-wrapper-5">{Flight ? formatDate(Flight?.landing) : ''}</div>
                {/* <div className="ellipse" /> */}
              </div>
              <div className="group-7">
                <div className="group-8">
                  <div className="text-wrapper-6">Can reschedule</div>
                </div>
                <div className="group-9">
                  <div className="text-wrapper-6">Refundable</div>
                </div>
              </div>
            </div>
          </div>
          <div className="divider" />
          <div className="group-10">
            <div className="text-wrapper-7">Total Payment</div>
            <div className="group-11">
              <div className="text-wrapper-8">$ {Flight?.price}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TiketbyID;
