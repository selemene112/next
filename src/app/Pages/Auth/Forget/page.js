import React from 'react';
import Template from '@/app/Components/Template/Auth';
import Forget from '@/app/Components/Organisme/ForgetPassword';

function ForgetPage() {
  return (
    <Template loginText="Forget Password">
      <Forget />
    </Template>
  );
}

export default ForgetPage;
