import React from 'react';

const LandingPage = () =>
  <div>
    <h1>Login</h1>
    <input type="email" placeholder="Email..." id="email_field" />
    <input type="password" placeholder="Password..." id="password_field" />
    
    <button onclick="login()">Iniciar sesión</button>
  </div>

export default LandingPage;