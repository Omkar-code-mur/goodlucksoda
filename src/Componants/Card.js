/** @format */

import React from "react";
import styles from "./Card.module.css";
export default function Card(props) {
  const { title, image, description } = props;
  return (
    <div className={styles.card}>
      <button className='btn'>
        <img className={styles.image} src={image} alt={title} />
        
          <h2 className={styles.text}>{title} <b>{description}</b></h2>
        
      </button>
    </div>
  );
}
