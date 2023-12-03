/** @format */

import React from "react";
import styles from "./About.module.css";
// Use named exports instead of default exports for better code completion and refactoring
export default function About() {
  // Use semantic HTML elements for better accessibility and SEO
  return (
    <section className={styles.about}>
      <h2 className={styles.header_dark}>About Us</h2>
      <div className={styles.row}>
        <figure className={styles.col}>
          <img src="images/logo/shopPhoto.jpeg" alt="Goodluck Soda Shop" />
        </figure>

        <article className={styles.col}>
          <h1>GoodLuck Soda Story</h1>

          <p>
            Goodluck Soda Shop is a family-owned business that started in 2014
            with a passion for creating and serving delicious and refreshing
            soda drinks. We offer a variety of flavours, from classic ones like
            cola, orange, and lemon to exotic ones like mango, blueberry, and
            kala khata. We also love experimenting with new flavours and
            combinations, and we always welcome feedback and suggestions from
            our customers.
          </p>
        </article>
      </div>
    </section>
  );
}

