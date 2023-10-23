'use client';
import React, { useEffect, useState } from 'react';
import Footer from '@/app/Components/Fragment/Footer';
import NavbarComponent from '@/app/Components/Fragment/NavbarLogin';
import ProfileCard from '@/app/Components/Fragment/ProfilCard/ProfilCard';
import styles from './Profile.module.css';

const Profile = (props) => {
  const [profileData, setProfileData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Mengambil token dari localStorage
    const token = localStorage.getItem('token');

    if (token) {
      // Jika token ada, kirim permintaan fetch dengan token
      fetch('https://easy-lime-seal-toga.cyclic.app//users/detail', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Request failed');
          }
          return response.json();
        })
        .then((data) => {
          setProfileData(data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching profile data:', error);
          setIsLoading(false);
        });
    } else {
      // Handle jika token tidak tersedia
      console.error('Token not found in localStorage');
      setIsLoading(false);
    }
  }, []);

  console.log(profileData);

  return (
    <div className={styles.pageProfile}>
      <NavbarComponent />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <form>
          <div className={styles.content}>
            <div className={styles.profileContent}>
              <ProfileCard
                name={profileData?.data?.name}
                city={profileData?.data?.city}
                address={profileData?.address}
                profImg={profileData?.photo}
                noCard="4441 1235 5512 5551"
                typeCard="Z"
                saldoCard="1,440,2"
                // onChange={handleUploadChange}
              />
            </div>
            <div className={styles.profileFrom}>{props.children}</div>
          </div>
        </form>
      )}
      <Footer />
    </div>
  );
};

export default Profile;
