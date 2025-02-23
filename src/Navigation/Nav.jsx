import React from 'react'
import "./Nav.css"
import {FiHeart} from 'react-icons/fi';
import {AiOutlineShoppingCart} from "react-icons/ai";
import {AiOutlineUserAdd} from "react-icons/ai";

const Nav = ({handleInputChange,query}) => {
    return (
        <nav>
            <div className="nav-container">
               <input
               className="search-input"
               type="text"
               placeholder="Enter your search shoes."
               onChange={handleInputChange}
               value={query}
               />
            </div>
            <div className="profile-container">
                <a href='#'>
                 <FiHeart className="nav-icons" />
                </a>
                <a href="">
                    <AiOutlineShoppingCart className="nav-icons"/>
                </a>
                <a href="">
                    <AiOutlineUserAdd className="nav-icons" />
                </a>
             </div>
        </nav>
    );
};
export default Nav
