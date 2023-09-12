import React from 'react';
import FormInput from '@/Components/Fragment/FormInput';
import Button from '@/Components/Elements/Button';

function RegisterFrom() {
  return (
    <form>
      <FormInput labelFor="username" inputId="username" placeholder="username" />
      <FormInput labelFor="email" inputId="email" placeholder="Email" />
      <FormInput labelFor="password" inputId="password" placeholder="Password" />
      <Button type="submit">Login</Button>
    </form>
  );
}

export default RegisterFrom;
