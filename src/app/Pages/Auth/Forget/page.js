import React from 'react';
import Template from '@/Components/Template/Auth';
import Forget from '@/Components/Organisme/ForgetPassword';

function ForgetPage() {
  return (
    <Template loginText="Forget Password">
      <Forget />
    </Template>
  );
}

export default ForgetPage;
