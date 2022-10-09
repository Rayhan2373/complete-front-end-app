import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div className='flex justify-center'>
            <CustomLink className='mr-2' to='/'>Home</CustomLink>
            <CustomLink className='mr-2' to='/shop'>Shop</CustomLink>
            <CustomLink className='mr-2' to='/product'>Products</CustomLink>
            <CustomLink className='mr-2' to='/about'>About</CustomLink>
            <CustomLink className='mr-2' to='/contact'>Contact</CustomLink>
            <CustomLink className='mr-2' to='/login'>Login</CustomLink>
        </div>
    );
};

export default Header;