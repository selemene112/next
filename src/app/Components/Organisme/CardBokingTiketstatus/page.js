'use client';
import React, { useEffect, useState } from 'react';
import './ModulBookingTiketStatus.css';

function CardBookingTiketStatus() {
  const [Flight, setFlight] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBookingData = async () => {
      try {
        const token = localStorage.getItem('token');

        if (!token) {
          console.error('Token not found.');
          setIsLoading(false);
          return;
        }

        const response = await fetch(`https://easy-lime-seal-toga.cyclic.app/booking/tickets`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          console.error('Error fetching booking data:', response.statusText);
          setIsLoading(false);
          return;
        }

        const data = await response.json();
        console.log('Booking data:', data);
        setFlight(data?.data?.result);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching booking data:', error);
        setIsLoading(false);
      }
    };

    fetchBookingData();
  }, []);

  const formatDate = (date) => {
    const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
    return new Date(date).toLocaleDateString('en-US', options);
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="card-body border border-primary">
      {Flight.map((booking, index) => (
        <div className="card-body border border-primary with-margin my-2 mx-2 p-3" key={index} style={{ margin: '10px 0' }}>
          <label>{formatDate(booking.passenger.updatedAt)}</label>
          <div className="row">
            <h5 className="col-2">
              {booking.ticket.from?.country}
              <br />( {booking.ticket.from?.code})
            </h5>
            <img className="col-1" alt="Vector" src="/Vector.svg" style={{ width: '50px' }} />
            <h5 className="col-2">
              {booking.ticket.to?.country}
              <br />({booking.ticket.to?.code})
            </h5>
          </div>
          <label>{booking.ticket.airline.name}</label>
          <hr style={{ backgroundColor: 'black', height: '5px' }} />
          <div className="row">
            <label className="col-2">Status</label>
            <label className="col-3 border border-primary" style={{ borderRadius: '5px', backgroundColor: booking.status.name === 'Pending' ? 'orange' : 'green' }}>
              {booking.status.name}
            </label>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardBookingTiketStatus;
