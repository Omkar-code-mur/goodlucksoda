/** @format */
import styles from "./Contact.module.css"
import React from "react";
// import { Link } from "react-router-dom";
export default function Contact() {
  return (
    <footer>
      <h2 className={styles.header_dark}>Contact Details</h2>
      <div className={styles.row}>
        <div className={styles.col}>
          <img src="images/logo/logo2.jpg" alt="a boy drinking soda" />
        </div>

        <div className={styles.col}>
        <h2>Address </h2>
        <a className={styles.email_id} href='https://maps.app.goo.gl/a5B7RYBvpd9oZV5P6' rel="noreferrer" target="_blank">
              <p >
                   S No-8/1, NDA Rd, Deshmukhwadi, Deshmukh Nagar, Shivane, Pune,
                   NDA Rd, Uttam Nagar, Deshmukh Nagar, Shivane, Pune,
                   Maharashtra 411023
                 </p>
               </a>

        </div>
        <div className={styles.col}>
          <h2>Contact Us</h2>
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
