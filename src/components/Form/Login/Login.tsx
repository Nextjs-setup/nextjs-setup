'use client'
import React from 'react'

const Login = () => {

  const handleLogin = (e:any)=>{
    e.preventDefault(); // stop page reload

    const email = e.target.email.value;
    const password = e.target.password.value;

    // For now, just log in console
    console.log("Login attempt:", { email, password });

    // Later we can compare with localStorage user
    alert(`Login attempted with\nEmail: ${email}`);
    
    // reset form
    e.target.reset();
  }

  return (
    <div>
      <h1>Login form:</h1>
      <form onSubmit={handleLogin} className="flex flex-col p-6">
        
        <label htmlFor="email">Email</label>
        <input 
          type="email" 
          id="email" 
          name="email"
          placeholder="Email" 
          className="bg-gray-50 border-2 mb-2"
          required
        />

        <label htmlFor="password">Password</label>
        <input 
          type="password" 
          id="password" 
          name="password"
          placeholder="Password" 
          className="bg-gray-50 border-2 mb-2"
          required
        />

        <button 
          type="submit" 
          className="p-2 border-2 bg-amber-300 mt-4 w-32 mx-auto"
        >
          Login
        </button>
      </form>
    </div>
  )
}

export default Login
