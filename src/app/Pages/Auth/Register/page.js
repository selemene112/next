'use client';
import React from 'react';
import Template from '@/app/Components/Template/Auth';
import RegisterFrom from '@/app/Components/Organisme/RegisterFrom';
function RegisterPage() {
  return (
    <Template loginText="Register">
      <RegisterFrom />
    </Template>
  );
}

export default RegisterPage;
