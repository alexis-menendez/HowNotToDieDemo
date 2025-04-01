// file path: how-not-to-die/client/src/components/home/LoginForm.jsx

import React from 'react';
import styles from '../../assets/css/home/Home.module.css';

const LoginForm = () => {
  return (
    <>
      <form className={styles.loginForm}>
        <label>
          Username:
          <input type="text" name="username" placeholder="Enter your handle" />
        </label>
        <label>
          Password:
          <input type="password" name="password" placeholder="••••••••" />
        </label>
        <button type="submit">Access Console</button>
      </form>

      <div className={styles.registerPrompt}>
        <p>Don’t have an account?</p>
        <button className={styles.registerButton}>Register Here</button>
      </div>
    </>
  );
};


export default LoginForm;
