import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profil from '../../../Components/Organisme/Profil/Profil';
import CardBookingTiketStatus from '@/app/Components/Organisme/CardBokingTiketstatus/page';

function MyBooking() {
  return (
    <div>
      <Profil>
        {' '}
        <CardBookingTiketStatus />
      </Profil>
    </div>
  );
}

export default MyBooking;
