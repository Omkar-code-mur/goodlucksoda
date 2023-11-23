/** @format */

import React, { useState } from "react";
import styles from "./Navbar.module.css";
import "./Navbar.module.css";

import { Link } from "react-router-dom";
export default function Navbar() {
  const [dropdown, setDropdown] = useState("")
  const [dropdownIcon, setDropdownIcon] = useState("bars")
  const toggleDropdown = ()=>{
      if (dropdown === ""){
        setDropdown(styles.open)
      }else{
        setDropdown("")
      }
      if (dropdownIcon === "bars"){
        setDropdownIcon("xmark")
      }else{
        setDropdownIcon("bars")
      }
      console.log("clicked")
  }
  return (
    <>
      <div className={styles.nav}>
        <div className={styles.logo}>
          <img src='images/logo/logo.png' alt='GoodLuck Soda Logo' />
          <Link to='/'>Goodluck Soda</Link>
        </div>
        <ul className={styles.links}>
          <li>
            <Link>Home</Link>
          </li>
          <li>
            <Link>About</Link>
          </li>
          <li>
            <Link>Top Picks</Link>
          </li>
          <li>
            <Link>Contact</Link>
          </li>
        </ul>
        <div className={styles.toggle_btn}>
          <li>
            <button className="btn btn-dark bg-dark" onClick={toggleDropdown}>
              <i className={`fa-solid fa-${dropdownIcon} `}></i>
            </button>
          </li>
        </div>
        
      </div>
      <div className={styles.drop_down+" "+dropdown}>
        
          <li>
            <Link>Home</Link>
          </li>
          <li>
            <Link>About</Link>
          </li>
          <li>
            <Link>Orders</Link>
          </li>
          <li>
            <Link>Contact</Link>
          </li> 
        </div>
    </>
  );
}
