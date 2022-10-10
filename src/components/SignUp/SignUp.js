import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './SignUp.css'

const SignUp = () => {
  const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()
  const location = useLocation()
  const from = location?.state?.from || '/'
  const handleWithSignUpForm=event=>{
      event.preventDefault()
      const emailField = event.target.email.value;
      const passwordField = event.target.password.value;
      setEmail(emailField)
      setPassword(passwordField) 
      event.target.reset()
  }
  if(user){
    navigate(from, {replace:true})
  }
  return (
    <div className='register-form'>
        <h2> Please <span> Register </span></h2>
      <form onSubmit={handleWithSignUpForm}>
         <input type="email" name="email" id="email" placeholder='Enter your Email' /> <br /> <br />
         <input type="password" name="password" id="password" placeholder='Password' /> <br /> <br />
         <button onClick={()=>createUserWithEmailAndPassword(email, password)}>Sign Up</button>
      </form>
      <div>
       <hr />
      </div>
      <div>
        <p>Already have a user?<Link to='/login'><button>Login</button></Link></p>
      </div>
    </div>
  );
};

export default SignUp;