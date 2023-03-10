import React from 'react';
import { Link } from 'react-router-dom';
import { cart } from './imgLink';

const Nav = () => {
    return (
        <nav>
            <ul>
                <Link to='/'>
                    <li>Home</li>
                </Link>
                <Link to='/shop'>
                    <li>Shop</li>
                </Link>
                <Link to='/about'>
                    <li>About</li>
                </Link>
                <Link to='/cart'>
                    <li id='li-cart'>
                        <img src={cart} className='nav-cart'
                        alt='cart icon'/>
                    </li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav;