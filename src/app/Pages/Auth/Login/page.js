'use client';
import { useRouter } from 'next/router';
import React from 'react';
import Template from '@/app/Components/Template/Auth';
import LoginForm from '@/app/Components/Organisme/LoginFrom';

function LoginPage() {
  return (
    <Template loginText="Login">
      <LoginForm />
    </Template>
  );
}

export default LoginPage;
