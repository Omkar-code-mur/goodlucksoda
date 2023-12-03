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
  const scrollTop = ()=>{
    window.scroll(0,0)
  }

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
            <Link to='/'><button className="btn btn-dark" onClick={scrollTop}>Home</button></Link>
          </li>
          <li>
            <Link to='about'><button className="btn btn-dark" onClick={scrollTop}>About</button></Link>
          </li>{" "}
          <li>
            <Link to='contact'><button className="btn btn-dark" onClick={scrollTop}>Contact</button></Link>
          </li>
          <li>
          <button className="btn btn-dark" onClick={scrollTop}><a href ='https://g.page/r/CSW6pGbKLNpGEBM/review' target="_black">Add Review</a></button>
        </li>
          <li>
            <Link to="cart"><button className="btn btn-dark" onClick={scrollTop}><i className='fas fa-shopping-cart'></i></button></Link>
            
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
