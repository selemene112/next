import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Label from '@/Components/Elements/Label';
import Input from '@/Components/Elements/Input';
import Button from '@/Components/Elements/Button';

function Login() {
  return (
    <div className="center">
      <div className="card">
        <h2>Login</h2>
        <form>
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" />
          <Label htmlFor="password">Password</Label>
          <Input type="password" id="password" />
          <Button type="submit">Login</Button>
        </form>
      </div>
    </div>
  );
}
export default Login;
