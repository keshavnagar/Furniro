import React from "react";
import "../styles/navbar.css";
import Logo from "../images/logo.png";
import { Link } from "react-router-dom";
import cart from '../images/icons/cart.png';
import wishlist from '../images/icons/whishlist.png';
import search from '../images/icons/search.png';
import userProfile from '../images/icons/user.png';

function Navbar() {
    return (
    <div className="navbar">
        
        <Link to="/" className="nav_logo">
            <img src={Logo} className="nav_logo_img"/>
        furniro
        </Link>
        <ul className="navbar_page_links">
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/shop">shop</Link>
        </li>
        <li>
            <Link to="/about">about us</Link>
        </li>
        <li>
            <Link to="/contact">contact</Link>
        </li>
        </ul>

        <ul>
            <li>
                <Link to=""><img src={userProfile} className="navbar_icon" /></Link>
            </li>
            <li>
                <Link to=""><img src={search} className="navbar_icon"/></Link>
            </li>
            <li>
                <Link to=""><img src={wishlist} className="navbar_icon"/></Link>
            </li>
            <li>
                <Link to=""><img src={cart} className="navbar_icon"/></Link>
            </li>
        </ul>
    </div>
    );
}

export default Navbar;
