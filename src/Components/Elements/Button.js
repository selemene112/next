import React from 'react';

function Button({ type, children }) {
  return (
    <button type={type} className="btn btn-primary">
      {children}
    </button>
  );
}

export default Button;
