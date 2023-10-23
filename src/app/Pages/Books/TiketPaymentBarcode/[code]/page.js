import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TiketPayment from '@/app/Components/Template/TiketPayment/TiketPayment';
import PaymentBookingPass from '@/app/Components/Organisme/PaymentBookingPass/page';

function TiketPaymentBarcode() {
  return (
    <div>
      <TiketPayment>
        <PaymentBookingPass />
      </TiketPayment>
    </div>
  );
}

export default TiketPaymentBarcode;
