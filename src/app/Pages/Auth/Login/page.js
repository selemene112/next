import React from 'react';
import Template from '@/Components/Template/Auth';
import LoginForm from '@/Components/Organisme/LoginFrom';

function LoginPage() {
  return (
    <Template loginText="Login">
      <LoginForm />
    </Template>
  );
}

export default LoginPage;
