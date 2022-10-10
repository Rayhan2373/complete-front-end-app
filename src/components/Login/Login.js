import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/'
    const [
        signInWithEmailAndPassword,
        user
    ] = useSignInWithEmailAndPassword(auth);
    const handleLogIn = (event) => {
        event.preventDefault()
        const emailField = event.target.email.value;
        const passField = event.target.password.value;
        setEmail(emailField)
        setPassword(passField)
        event.target.reset()
    }
    if (user) {
        navigate(from, { replace: true })
    }

    return (
        <div className='login-container'>
            <h2> Please <span> Log in </span></h2>
            <form onSubmit={handleLogIn}>
                <input type="email" name="email" id="email" placeholder='Enter your Email' /><br /> <br />
                <input type="password" name="password" id="password" placeholder='Password' /> <br /> <br />
                <button onClick={() => signInWithEmailAndPassword(email, password)}>Sign In</button>
            </form>
            <div>
                <hr />
            </div>
            <div>
                <p>Create an account ? <Link to='/signup'><button>Sign Up</button></Link></p>
            </div>
        </div>
    );
};

export default Login;