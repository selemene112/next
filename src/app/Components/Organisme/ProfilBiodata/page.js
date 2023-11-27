'use client';
import React from 'react';
import styles from './Profile.module.css';

function ProfilBiodata() {
  return (
    <div>
      <p>Profile</p>
      <div className={styles.orderTitle}>
        <div className={styles.titleProfile}>Profile</div>
      </div>
      <div className={styles.profileUdpate}>
        <div className={styles.contact}>
          <div>Contact</div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" label="Email" placeholder="email" className={styles.inputProfile} />
            <label htmlFor="phone">Phone Number</label>

            <input type="text" name="phone" label="Phone Number" placeholder="000 -- 0000 --- 0000" className={styles.inputProfile} />
            <span>Account Setting</span>
          </div>
        </div>
        <div className={styles.biodata}>
          <div>Biodata</div>
          <div>
            <label htmlFor="fullname">Full name</label>

            <input type="text" name="fullname" label="Fullname" placeholder="Fullname" className={styles.inputProfile} />
            <label htmlFor="city">City</label>

            <input type="text" name="city" label="City" placeholder="City" className={styles.inputProfile} />
            <label htmlFor="address">Address</label>

            <input type="text" name="address" placeholder="Address" className={styles.inputProfile} />
            <label htmlFor="poscode">Post Code</label>

            <input type="text" name="poscode" label="Post Code" placeholder="Post Code" className={styles.inputProfile} />
            <button title="Save" className={styles.saveProfile}>
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilBiodata;
