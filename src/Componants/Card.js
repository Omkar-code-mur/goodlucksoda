import React from 'react'
import styles from './Card.module.css';
export default function Card(props) {
    const { title, image, description } = props;
    return (
      <div className={styles.card}>
        
        
        
        <button className='btn'>
        
        <img className={styles.image} src={image} alt={title} />
        <h2 >{title}<price> {description}</price></h2>
        </button>
        
      </div>
    );
  }
  
