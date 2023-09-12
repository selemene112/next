import React from 'react';

import Label from '../Elements/Label';
import Input from '../Elements/Input';

function FormInput({ labelFor, inputId, placeholder }) {
  return (
    <div className="mb-3">
      <Label htmlFor={labelFor}>{placeholder}</Label>
      <Input type="text" id={inputId} placeholder={placeholder} />
    </div>
  );
}

export default FormInput;
