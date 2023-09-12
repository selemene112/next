import React from 'react';
import FormInput from '@/Components/Fragment/FormInput';
import Button from '@/Components/Elements/Button';

function Forget() {
  return (
    <form>
      <FormInput labelFor="email" inputId="email" placeholder="email" />
      <Button type="submit">Send</Button>
    </form>
  );
}

export default Forget;
