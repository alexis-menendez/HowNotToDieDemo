// file path: how-not-to-die/client/src/components/home/RegisterForm.jsx

import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../assets/css/home/Home.module.css';
import { AuthContext } from '../home/AuthContext';

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const VITE_BACKEND_URL = "https://hownottodiedemo.onrender.com";
  
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (!username || !password || !confirmPassword) {
      setErrorMsg('Please fill out all fields.');
      return;
    }

    if (password !== confirmPassword) {
      setErrorMsg('Passwords do not match.');
      return;
    }

    try {
      const response = await  fetch(`${VITE_BACKEND_URL}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const text = await response.json();
      console.log("Raw response from /auth/register:", text);

      let data;
      try {
        data = JSON.parse(text);
      } catch (err) {
        console.error("Failed to parse JSON:", err);
        throw new Error("Server returned invalid JSON");
      }


      if (!response.ok) {
        throw new Error(data.message || 'Registration failed');
      }

      login(data.user, data.token);
      navigate('/dashboard');
    } catch (err) {
      setErrorMsg(err.message);
    }
  };

  return (
    <form className={styles.loginForm} onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          name="username"
          placeholder="Create a handle"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          name="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <label>
        Confirm Password:
        <input
          type="password"
          name="confirmPassword"
          placeholder="••••••••"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </label>
      <button type="submit">Register</button>
      {errorMsg && <p className={styles.error}>{errorMsg}</p>}
    </form>
  );
};

export default RegisterForm;
