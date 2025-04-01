// file path: how-not-to-die/src/pages/Home.jsx
// Login / Register console screen

import React, { useState, useContext } from 'react';
import LoginForm from '../components/home/LoginForm';
import RegisterForm from '../components/home/RegisterForm';
import { AuthContext } from '../components/home/AuthContext';

const Home = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const { isAuthenticated, logout } = useContext(AuthContext);

  const handleToggle = () => {
    setIsRegistering((prev) => !prev);
  };

  return (
    <>
      <h2>Welcome, Commander</h2>

      {isAuthenticated ? (
        <>
          <p>You are logged in.</p>
          <button onClick={logout}>Sign Out</button>
        </>
      ) : (
        <>
          <p>{isRegistering ? 'Create a new account' : 'Please Sign In'}</p>
          {isRegistering ? <RegisterForm /> : <LoginForm />}
          <div style={{ marginTop: '20px' }}>
            <button onClick={handleToggle}>
              {isRegistering ? '← Back to Login' : 'Register Here'}
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default Home;
