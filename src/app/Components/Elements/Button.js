import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Button({ type, children }) {
  return (
    <button type={type} className="btn btn-primary btn-block w-100">
      {children}
    </button>
  );
}

export default Button;
