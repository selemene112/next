'use client';
import React from 'react';

import Form from 'react-bootstrap/Form';

function FormContactPerson({ name, placeholder, type, id }) {
  return (
    <Form>
      <Form.Group className="mb-3" controlId={id}>
        <Form.Label>{name}</Form.Label>
        <Form.Control type={type} placeholder={placeholder} />
      </Form.Group>
      <Form.Group className="mb-3" controlId={id}>
        <Form.Label>{name}</Form.Label>
        <Form.Control type={type} placeholder={placeholder} />
      </Form.Group>
      <Form.Group className="mb-3" controlId={id}>
        <Form.Label>{name}</Form.Label>
        <Form.Control type={type} placeholder={placeholder} />
      </Form.Group>
    </Form>
  );
}

export default FormContactPerson;
