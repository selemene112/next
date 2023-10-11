import React from 'react';

import TiketTemplate from '@/app/Components/Template/TiketTemplate/TiketTemplate';
import TiketbyID from '@/app/Components/Fragment/BokingTiket/TiketbyID/TiketbyID';
const TiketDetailBooking = () => {
  return (
    <div>
      <TiketTemplate>
        <TiketbyID />
      </TiketTemplate>
    </div>
  );
};

export default TiketDetailBooking;
