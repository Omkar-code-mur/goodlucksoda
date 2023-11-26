/** @format */

import React from "react";
import styles from "./About.module.css";
export default function About() {
  return (
    <footer>
        <h2 className={styles.header_dark}>About Us</h2>
      <div className={styles.row}>
        <div className={styles.col}>
          <img src='images/logo/shopPhoto.jpeg' alt='goodluck soda shop' />
        </div>

        <div className={styles.col}>
          <h1>GoodLuck Soda Story </h1>

          <p>
            Goodluck Soda Shop is a family-owned business that started in 2014
            with a passion for creating and serving delicious and refreshing
            soda drinks. We offer a variety of flavours, from classic ones like
            cola, orange, and lemon to exotic ones like mango, blueberry, and
            kala khata. We also love experimenting with new flavours and
            combinations, and we always welcome feedback and suggestions from
            our customers.
          </p>
        </div>
      </div>
      
    </footer>
  );
}
