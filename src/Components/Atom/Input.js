import React from 'react';

const Input = ({ type, id, value, onChange }) => {
  return <input type={type} id={id} value={value} onChange={onChange} />;
};

export default Input;
