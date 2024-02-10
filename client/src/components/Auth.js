//Handles user registration and login functionality

import React from 'react'
import { useState } from 'react' // hook

// function Auth({ updateToken }) { // token for either state on the form: login, or register 
//     const [isLogin, setIsLogin] = useState(true) // similar to the 'my-app' lecture
//     const [formData, setFormData] = useState({ // reflects the user schema
//         firstName: '', // values are initially set as empty string
//         lastName: '',
//         email: '',
//         password: ''
//     })
// }

//login component
function userLogin({ onToggle, onLogin }) {
    const [email, setEmail] = useState('')
    const[password, setPassword] = useState('')

    //handle login click
    function handleLogin() {
        onLogin({ email, password }) //login logic for onClick
    }
    //form stuff
    return (
        <div>
        <h2>Login Form</h2>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button onClick={handleLogin}>Login</button>
        <p>New user? <span onClick={onToggle}>Sign up here!</span></p>
      </div>
    )
  }

//Registration component
function userRegister({ onToggle, onRegister }) {
    //use states for firstName, lastName, email, password
}

//Auth main component
function Auth() {
    const [isLogin, setIsLogin] = useState(true) //set login as the default
}

//! function for toggling between forms

//! function for handling user registration

//! render form?

//! export Auth?

