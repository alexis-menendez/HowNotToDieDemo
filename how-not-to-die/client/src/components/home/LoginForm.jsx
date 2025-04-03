// file path: how-not-to-die/client/src/components/home/LoginForm.jsx

import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../assets/css/home/Home.module.css';
import { AuthContext } from '../home/AuthContext';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (!username || !password) {
      setErrorMsg('Please enter both username and password.');
      return;
    }

    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
    
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || 'Login failed');
      }
    
      const data = await response.json();
      login(data.user, data.token);
      navigate('/dashboard');
    } catch (err) {
      setErrorMsg(err.message || 'Something went wrong during login.');
    }
    
  };

  return (
    <>
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            placeholder="Enter your handle"
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
        <button type="submit">Access Console</button>
        {errorMsg && <p className={styles.error}>{errorMsg}</p>}
      </form>
    </>
  );
};

export default LoginForm;
