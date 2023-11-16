import React from 'react'
import styles from './Card.module.css';
export default function Card(props) {
    const { title, image, description } = props;
    return (
      <div className={styles.card}>
        <h3 className={styles.title}>{title}</h3>
        <img className={styles.image} src={image} alt={title} />
        <p className={styles.description}>{description}</p>
      </div>
    );
  }
  
