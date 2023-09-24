'use client';
import React from 'react';
// import Button from "../../base/button";
//make function 2 sum

import { useRouter } from 'next/navigation';
import styles from './profile.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Swal from 'sweetalert2';
import Input from '../Input/Input';
import Imag from '../../../../../public/img/index';

const ProfileCard = ({ name, city, address, profImg, noCard, typeCard, saldoCard, onChange }) => {
  // const navigate = useNavigate();
  const router = useRouter();

  const handleLogout = async () => {
    await localStorage.clear();
    Swal.fire({
      title: 'Log Out',
      text: `Log Out Success`,
      icon: 'success',
    });
  };
  return (
    <div className={styles.profileCard}>
      <div className={styles.wraperProfile}>
        <img src="/profil.svg" alt="" />
      </div>
      <div>
        <Input label="Select photo" name="files" id="files" className="inputFoto" classNameLabel="labelFoto" type="file" onChange={onChange} />
      </div>
      <div className={styles.name}>{name ? name : ''}</div>
      <div className={styles.address}>
        {city ? city : 'Jember'}, {address ? address : 'Jawa Timur'}
      </div>
      <div className={styles.titleCard}>
        <div>Cards</div>
        <div>+ Add</div>
      </div>
      <div className={styles.contentCard}>
        <div>{noCard ? noCard : ''}</div>
        <div className={styles.cardType}>
          <div>{typeCard ? typeCard : ''} Card</div>
          <div>$ {saldoCard ? saldoCard : ''}</div>
        </div>
      </div>
      <div className={styles.menu}>
        {/* profile */}
        <Link href="/users/profile">
          <div className="d-flex justify-content-between">
            <button className="btn">
              <Image src={Imag.u9} alt="" />
            </button>
            <button className="btn">
              <Image src={Imag.b1} alt="" />
            </button>
          </div>
        </Link>
        {/* my reviuw */}
        <div className="d-flex justify-content-between">
          <button className="btn">
            <Image src={Imag.u7} alt="" />
          </button>
          <button className="btn">
            <Image src={Imag.b3} alt="" />
          </button>
        </div>
        {/* setting */}
        <div className="d-flex justify-content-between">
          <button className="btn">
            <Image src={Imag.u8} alt="" />
          </button>
          <button className="btn">
            <Image src={Imag.b3} alt="" />
          </button>
        </div>
        {/* logout */}
        <div
          className="d-flex justify-content-between"
          onClick={() => {
            handleLogout();
            router.push('/landing');
          }}
        >
          <button className="btn">
            <Image src={Imag.u6} alt="" />
          </button>
          <button className="btn">
            <Image src={Imag.b2} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
