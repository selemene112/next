import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profil from '../../../Components/Organisme/Profil/Profil';
import ProfilBiodata from '@/app/Components/Organisme/ProfilBiodata/page';
import CardBookingTiketStatus from '@/app/Components/Organisme/CardBokingTiketstatus/page';

function BiodataProfil() {
  return (
    <div>
      <Profil>
        {''}
        <ProfilBiodata />
        {/* <CardBookingTiketStatus /> */}
      </Profil>
    </div>
  );
}

export default BiodataProfil;
