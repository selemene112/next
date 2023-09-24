`use client `;
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

import FormInput from '@/app/Components/Fragment/FormInput';
import Button from '@/app/Components/Elements/Button';

function LoginForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
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
      const response = await fetch(`https://easy-lime-seal-toga.cyclic.app/auth/login`, {
        method: `POST`,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        const token = data.data.access_token; // Ambil token dari respons API

        // Simpan token ke local storage
        localStorage.setItem('token', token);

        console.log('Login berhasil');
        console.log(data);
        router.push('/');
        console.log('Login berhasil');
        console.log(response.json());
        router.push('/');
      } else {
        console.error('Login gagal');
        console.log(formData);
        console.log(data);

        console.log(response);
      }
    } catch (error) {
      console.error('Terjadi kesalahan', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <FormInput labelFor="email" type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
        <FormInput labelFor="password" type="password" id="password" name="password" value={formData.password} onChange={handleChange} className="form-control border-0 border-bottom shadow-none" placeholder="Password" />
        <Button type="submit">Login</Button>
      </form>
    </div>
  );
}

export default LoginForm;
