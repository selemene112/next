import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profil from '../../../Components/Organisme/Profil/Profil';
import ProfilBiodata from '@/app/Components/Organisme/ProfilBiodata/page';

function BiodataProfil() {
  return (
    <Profil>
      <ProfilBiodata />
    </Profil>
  );
}

export default BiodataProfil;
