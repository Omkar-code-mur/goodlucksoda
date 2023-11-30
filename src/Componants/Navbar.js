/** @format */

import React, { useState } from "react";
import styles from "./Navbar.module.css";
import "./Navbar.module.css";

import { Link } from "react-router-dom";
export default function Navbar(props) {
  const [dropdown, setDropdown] = useState("");
  // const [sodaCount, setSodaCount] = useState(props.count);
  const [dropdownIcon, setDropdownIcon] = useState("bars");

  const toggleDropdown = () => {
    if (dropdown === "") {
      setDropdown(styles.open);
    } else {
      setDropdown("");
    }
    if (dropdownIcon === "bars") {
      setDropdownIcon("xmark");
    } else {
      setDropdownIcon("bars");
    }
    console.log("clicked");
  };

  return (
    <>
      {}
      <div className={styles.nav}>
        <div className={styles.logo}>
          <img src='images/logo/logo.png' alt='GoodLuck Soda Logo' />
          <Link to='/'>Goodluck Soda</Link>
        </div>
        <ul className={styles.links}>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='about'>About</Link>
          </li>{" "}
          <li>
            <Link to='contact'>Contact</Link>
          </li>
          <li>
          <a href ='https://g.page/r/CSW6pGbKLNpGEBM/review' target="_black">Add Review</a>
        </li>
          <li>
            <Link to="cart"><i className='fas fa-shopping-cart'></i></Link>
            
          </li>
        </ul>
        <div className={styles.toggle_btn}>
          <li>
            <button className='btn btn-dark bg-dark' onClick={toggleDropdown}>
              <i className={`fa-solid fa-${dropdownIcon} `}></i>
            </button>
          </li>
        </div>
      </div>
      <div className={styles.drop_down + " " + dropdown}>
        <li>
          <Link to='/'><button className="btn btn-dark" onClick={toggleDropdown}>Home</button></Link>
        </li>
        <li>
          <Link to='about'><button className="btn btn-dark" onClick={toggleDropdown}>About</button></Link>
        </li>{" "}
        <li>
          <Link to='contact'><button className="btn btn-dark" onClick={toggleDropdown}>Contact</button></Link>
        </li>
        <li>
          <a href ='https://g.page/r/CSW6pGbKLNpGEBM/review'><button className="btn btn-dark" onClick={toggleDropdown}>Add Review</button></a>
        </li>
        <li>
            <Link to="cart"><button className="btn btn-dark" onClick={toggleDropdown}><i className='fas fa-shopping-cart'></i></button></Link>
            
          </li>
      </div>
    </>
  );
}
