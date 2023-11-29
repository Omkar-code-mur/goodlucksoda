/** @format */

import React, { useContext, useState } from "react";
import { Data } from "../App";
import styles from "./Card.module.css";

const sodas = [
  { title: "Mango Soda", url: "images/mango.jpg", value: 10 },
  { title: "Limca Soda", url: "images/limca.jpg", value: 10 },
  { title: "Kala Khatta ", url: "images/kalaKhatta.jpg", value: 10 },
  { title: "Pudina Soda ", url: "images/pudina.jpg", value: 10 },
  { title: "Pinapple Soda ", url: "images/pineApple.jpg", value: 10 },
  { title: "Orange Soda", url: "images/orange.jpg", value: 10 },
  { title: "Jeera Soda", url: "images/jeera.jpg", value: 10 },
  { title: "Fruit Beer Soda", url: "images/fruitBeer.jpg", value: 10 },
  { title: "Blueberry Soda", url: "images/blueberry.jpg", value: 10 },
  { title: "Lemon Soda ", url: "images/lemon.jpg", value: 10 },
  { title: "Strawberry Soda ", url: "images/strawberry.jpg", value: 10 },
  { title: "Cola Soda", url: "images/cola.jpg", value: 10 },
  { title: "Limbo Masala", url: "images/15/masala.jpg", value: 15 },
  { title: "Sweet Limbo", url: "images/15/sweetlemon.jpg", value: 15 },
  { title: "Salty Limbo", url: "images/15/saltyLemon.jpg", value: 15 },
  { title: "Ginger Limbo", url: "images/15/ginger.jpg", value: 15 },
  { title: "Nimbu Sharbat", url: "images/15/nimbuSharbat.jpg", value: 15 },
];
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
      </div>
    </>
  );
}
