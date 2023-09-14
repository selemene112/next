import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Input({ type, id, placeholder, name, value, onChange }) {
  return <input type={type} id={id} name={name} value={value} onChange={onChange} className="form-control" placeholder={placeholder} required />;
}

export default Input;
