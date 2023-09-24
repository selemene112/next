`use client `;
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import FormInput from '@/app/Components/Fragment/FormInput';
import Button from '@/app/Components/Elements/Button';

function RegisterFrom() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: ``,
    email: ``,
    password: ``,
  });

  console.log(formData);

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
      const response = await fetch(`https://easy-lime-seal-toga.cyclic.app/auth/register`, {
        method: `POST`,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Login berhasil');
        console.log(response.json());
        console.log(response);
        router.push('/Pages/Auth/Login');
      } else {
        const data = await response.json();
        console.error('Login gagal');
        console.log(formData);

        console.log(response);

        console.log(data);
      }
    } catch (error) {
      console.error('Terjadi kesalahan', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormInput labelFor="name" type="name" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="name" />
      <FormInput labelFor="email" type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
      <FormInput labelFor="password" type="password" id="password" name="password" value={formData.password} onChange={handleChange} className="form-control border-0 border-bottom shadow-none" placeholder="Password" />
      <Button type="submit">Login</Button>
    </form>
  );
}

export default RegisterFrom;
