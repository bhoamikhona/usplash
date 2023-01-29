import React from "react";

const Register = () => {
  return (
    <div className="auth">
      <h1 className="auth-h1">Register</h1>
      <form className="auth-form">
        <input className="auth-input" type="text" placeholder="username" />
        <input className="auth-input" type="email" placeholder="email" />
        <input className="auth-input" type="password" placeholder="password" />
        <input
          className="auth-input"
          type="password"
          placeholder="confirm password"
        />
        <button className="auth-button">Register</button>
        <p className="auth-error">Error Registering</p>
        <span className="auth-span">
          Have an account? <a href="/login">Login</a>
        </span>
      </form>
    </div>
  );
};

export default Register;
