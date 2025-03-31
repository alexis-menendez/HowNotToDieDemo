// file path: how-not-to-die/src/components/Navigation.jsx
// Login / Register console screen

import React from 'react';
import LoginForm from '../components/home/LoginForm';
// import RegisterForm from '../components/home/RegisterForm';
// import AuthWrapper from '../components/home/AuthWrapper';

const Home = () => {
  return (
    <>
      <h2>Welcome, Commander</h2>
      <p>Please Sign In</p>
      <LoginForm />
    </>
  );
};

export default Home;