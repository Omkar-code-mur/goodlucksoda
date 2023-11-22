/** @format */

import React from "react";
import "../App.css";

import { Link } from "react-router-dom";
export default function Navbar(props) {
  return (
    <>
      <nav>
        <Link to='/' className='logo'>
          <img
            src='images/logo/logo.png'
            alt='GoodLuck Soda Logo'
            height={"90px"}
          />
        </Link>
        <Link className="nav-item" style={{ textDecoration: "none", color:"white" }} to='/'>
              Goodluck Soda
            </Link>

         
       
      </nav>
    </>
  );
}
