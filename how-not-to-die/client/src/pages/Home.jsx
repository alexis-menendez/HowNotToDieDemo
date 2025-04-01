// file path: how-not-to-die/src/components/Navigation.jsx
// Login / Register console screen

import React, { useState } from 'react';
import LoginForm from '../components/home/LoginForm';
import RegisterForm from '../components/home/RegisterForm';

const Home = () => {
  const [isRegistering, setIsRegistering] = useState(false);

  const handleToggle = () => {
    setIsRegistering((prev) => !prev);
  };

  return (
    <>
      <h2>Welcome, Commander</h2>
      <p>{isRegistering ? 'Create a new account' : 'Please Sign In'}</p>

      {isRegistering ? <RegisterForm /> : <LoginForm />}

      <div style={{ marginTop: '20px' }}>
        <button onClick={handleToggle}>
          {isRegistering ? '← Back to Login' : 'Register Here'}
        </button>
      </div>
    </>
  );
};

export default Home;
