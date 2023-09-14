import React from 'react';

import Label from '../Elements/Label';
import Input from '../Elements/Input';

function FormInput({ labelFor, type, id, placeholder, name, value, onChange }) {
  return (
    <div className="mb-3">
      <Label htmlFor={labelFor}>{placeholder}</Label>

      <Input type={type} id={id} name={name} value={value} onChange={onChange} placeholder={placeholder} />
    </div>
  );
}

export default FormInput;
