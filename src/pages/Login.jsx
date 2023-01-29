import React from "react";

const Login = () => {
  return (
    <div className="auth">
      <h1 className="auth-h1">Login</h1>
      <form className="auth-form">
        <input className="auth-input" type="text" placeholder="username" />
        <input className="auth-input" type="password" placeholder="password" />
        <button className="auth-button">Login</button>
        <p className="auth-error">Error Logging in</p>
        <span className="auth-span">
          Don't have an account? <a href="/register">Register</a>
        </span>
      </form>
    </div>
  );
};

export default Login;
