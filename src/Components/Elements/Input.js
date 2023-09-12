import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Input({ type, id, placeholder }) {
  return <input type={type} id={id} className="form-control" placeholder={placeholder} />;
}

export default Input;
