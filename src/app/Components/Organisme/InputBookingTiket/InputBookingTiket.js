'use client';
import React, { useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import FormInput from '@/app/Components/Fragment/FormInput';
import Button from '@/app/Components/Elements/Button';

function InputBookingTiket() {
  const router = useRouter();
  const params = useParams();
  const code = params.code;
  const token = localStorage.getItem('token');
  console.log('ini token', token);
  const [formData, setFormData] = useState({
    title1: ``,
    fullname1: ``,
    nationality1: ``,
    title2: ``,
    fullname2: ``,
    nationality2: ``,
  });

  console.log(formData);
  console.log('ini dari Input', code);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(`Input name: ${name}, Value: ${value}`);
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://easy-lime-seal-toga.cyclic.app/booking/tickets/${code}`, {
        method: `POST`,
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        const token = data.data.access_token;

        // Simpan token ke local storage
        localStorage.setItem('token', token);

        console.log('Make Booking Tiket Succes');
        console.log(data);
      } else {
        const data = await response.json();
        console.error('Faild Booking Tiket');
        // console.log(formData);
        console.log(data);

        console.log('ini daata ' + response);
      }
    } catch (error) {
      console.error('Terjadi kesalahan', error);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <FormInput labelFor="Title" type="title1" id="title1" name="title1" value={formData.title1} onChange={handleChange} placeholder="Title" />
        <FormInput labelFor="Full Name" type="fullname1" id="fullname1" name="fullname1" value={formData.fullname1} onChange={handleChange} placeholder="Full Name" />
        <FormInput labelFor="Nationality" type="nationality1" id="nationality1" name="nationality1" value={formData.nationality1} onChange={handleChange} placeholder="Nationality" />
        <h4>Passeger Detail</h4>
        <FormInput labelFor="Title" type="title2" id="title2" name="title2" value={formData.title2} onChange={handleChange} placeholder="title" />
        <FormInput labelFor="Full Name" type="fullname2" id="fullname2" name="fullname2" value={formData.fullname2} onChange={handleChange} placeholder="Full Name" />
        <FormInput labelFor="Nationality" type="nationality2" id="nationality2" name="nationality2" value={formData.nationality2} onChange={handleChange} placeholder="Nationality" />
        <Button type="submit">Proceed to Payment</Button>
      </form>
    </div>
  );
}

export default InputBookingTiket;
