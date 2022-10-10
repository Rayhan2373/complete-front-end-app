import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);
    return (
        <div className="header-container">
            <CustomLink to='/'>Home</CustomLink>
            <CustomLink to='/shop'>Shop</CustomLink>
            <CustomLink to='/product'>Products</CustomLink>
            <CustomLink to='/about'>About</CustomLink>
            <CustomLink to='/contact'>Contact</CustomLink>
            {
                user?.email 
                ? 
                <button onClick={()=>signOut(auth)}>SignOut</button>
                :
                <CustomLink to='/login'>Log In</CustomLink>

            }
        </div>
    );
};

export default Header;