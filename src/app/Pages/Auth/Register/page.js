import React from 'react';
import Template from '@/Components/Template/Auth';
import RegisterFrom from '@/Components/Organisme/RegisterFrom';
function RegisterPage() {
  return (
    <Template loginText="Register">
      <RegisterFrom />
    </Template>
  );
}

export default RegisterPage;
