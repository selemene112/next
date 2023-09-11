import React, { useState } from 'react';
import Button from '../Components/Atom/Button.js';
import Label from '../Components/Atom/Label.js';
import Input from '../Components/Atom/Input.js';
import Text from '../Components/Atom/Text.js';
import { useClient } from 'next/client';

const Home = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    // Tambahkan logika autentikasi di sini
  };

  // Menggunakan useClient untuk menandai komponen sebagai "Client Component"
  useClient();

  return (
    <div>
      <Label htmlFor="username">Username:</Label>
      <Input type="text" id="username" value={username} onChange={handleUsernameChange} />

      <Label htmlFor="password">Password:</Label>
      <Input type="password" id="password" value={password} onChange={handlePasswordChange} />

      <Button onClick={handleLogin}>Login</Button>
      <Text>
        Belum punya akun? <a href="/register">Daftar</a>
      </Text>
    </div>
  );
};

export default Home;
