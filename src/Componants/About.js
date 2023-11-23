/** @format */
import styles from "./About.module.css"
import React from "react";
// import { Link } from "react-router-dom";
export default function About() {
  return (
    <footer>
      <div className={styles.row}>
        <div className={styles.col}>
          <img src="images/logo/logo2.jpg" alt="a boy drinking soda" />
        </div>

        <div className={styles.col}>
        <h3>Address </h3>
        <a className={styles.email_id} href='https://maps.app.goo.gl/a5B7RYBvpd9oZV5P6' rel="noreferrer" target="_blank">
              <p >
                   S No-8/1, NDA Rd, Deshmukhwadi, Deshmukh Nagar, Shivane, Pune,
                   NDA Rd, Uttam Nagar, Deshmukh Nagar, Shivane, Pune,
                   Maharashtra 411023
                 </p>
               </a>

        </div>
        <div className={styles.col}>
          <h3>Contact Us</h3>
          <p>8308986134 / 9588680935</p>
          <p><a className="email-id" href="mailto:goodlucksodashop@gmail" >goodlucksodashop@gmail.com</a></p>
        </div>
        <div className={styles.col}>
          <img src="images/logo/logo3.jpg" alt="A girl drinking orange soda."  />
        </div>

      </div>
    </footer>
  );
}
