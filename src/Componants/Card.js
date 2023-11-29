/** @format */

import React, { useContext, useState } from "react";
import { Data } from "../App";
import styles from "./Card.module.css";
import Alert from "./Alert";


export default function Card(props) {
  const { title, image, value } = props;
  const [alert, setAlert] = useState(null);
  let data = useContext(Data);
  const showAlert = (message, type)=>{
    setAlert(
      {
        message: message,
        type:type
      })
      setTimeout(() => {
        setAlert(null)
      }, 2000);
    
  }
  const addSoda = () => {
    data.a(title);
    
    showAlert(`${title} added to cart`,"success")
    
  };
  return (
    <>
      <div className={styles.card}>
      
        <img className={styles.image} src={image} alt={title} />

        <h2 className={styles.text}>
          {title} <b>₹{value}</b>
        </h2>
        
        <button className='btn btn-success' onClick={addSoda}>
          Add to cart
          
        </button>
        <Alert alert={alert}/>
      </div>
      
    </>
  );
}
