import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import '../../App.css'
import auth from '../../firebase.init';

const SignUp = () => {
  const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleWithSignUpForm=event=>{
      event.preventDefault()
      const emailField = event.target.email.value;
      const passwordField = event.target.password.value;
      setEmail(emailField)
      setPassword(passwordField) 
      event.target.reset()
  }
  return (
    <div className='App'>
        <h2> Please Register</h2>
      <form onSubmit={handleWithSignUpForm}>
         <input type="text" name="name" id="name" placeholder='Enter your Name' /> <br /> <br />
         <input type="email" name="email" id="email" placeholder='Enter your Email' /> <br /> <br />
         <input type="password" name="password" id="password" placeholder='Password' /> <br /> <br />
         <button onClick={()=>createUserWithEmailAndPassword(email, password)}>Sign Up</button>
      </form>
      <div>
        <p>Already have a user?<Link to='/login'>Login</Link></p>
      </div>
    </div>
  );
};

export default SignUp;