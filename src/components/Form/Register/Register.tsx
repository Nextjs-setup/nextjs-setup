'use client'

import React from 'react'

const Register = () => {

    const handleSubmit = (e:any) =>{
        e.preventdefault();

        const name = e.target.fullName.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log("Registered :" ,{name , email, password})

        alert(`Registered successfully!! \nWelcome $(name)`);

        e.target.reset();
    }

  return (
    <div>
      <h1>
        Register form:
      </h1>
      <div className="justify-center m-16">
        <form onSubmit={handleSubmit} className="flex flex-col p-6">
          <label htmlFor="fullName">Full Name</label>
          <input 
            type="text" 
            id="fullName" 
            name="fullName"
            placeholder="Full Name" 
            className="bg-gray-50 border-4 placeholder-sky-300"
            required
          />

          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email" 
            name="email"
            placeholder="Email" 
            className="bg-gray-50 border-4 placeholder-sky-300"
            required
          />

          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            id="password" 
            name="password"
            placeholder="Password" 
            className="bg-gray-50 border-4 placeholder-sky-300"
            required
          />

          <button 
            type="submit" 
            className="p-4 border-4 bg-amber-300 mt-6 w-32 mx-auto"
          >
            Register
          </button>
        </form>
      </div>
    </div>

  )
}

export default Register
