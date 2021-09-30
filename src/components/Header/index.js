import React from 'react';
import './style.scss';
import logo from './../../assets/logo.png';
import {Link} from 'react-router-dom';

const Header = props=>{
return (
        <div className="header">
            <div className="wrap">
                <div className="logo">
                <Link to="/">
                    <img style={{width:"50px",height:"80px"}}src={logo} alt="logo"></img>
                </Link>
                </div>
            </div>
            <div className="callToAction">
            <ul>
                <li>
            <Link to="/registration">
            Register
            </Link>
            </li>
            <li>
                <Link to="/LogIn">
                Log in
                </Link>
            </li>
            </ul>
            </div>
        </div>
    )
}
export default Header;