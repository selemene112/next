import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TiketPayment from '@/app/Components/Template/TiketPayment/TiketPayment';
import CardPaymentBooking from '@/app/Components/Organisme/CardPaymentBooking/page';

function TiketBookingPages() {
  return (
    <div>
      <TiketPayment>
        <CardPaymentBooking />
      </TiketPayment>
    </div>
  );
}

export default TiketBookingPages;
