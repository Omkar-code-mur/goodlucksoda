/** @format */

import React from "react";
import Card from "./Card";
import styles from "./Cards.module.css";
import About from "./Contact";
import Banner from "./Banner"; 
export default function Cards(props) {
  const bestSellers = [
    { title: "Jeera", url: "images/jeera.jpg", value:10  },
    { title: "Fruit Beer", url: "images/fruitBeer.jpg", value:10  },
    { title: "Blueberry", url: "images/blueberry.jpg", value:10  },
    { title: "Sweet Limbo", url: "images/15/sweetlemon.jpg", value:15  },
  ];
  const sodas = [
    { title: "Mango", url: "images/mango.jpg", value: 10 },
    { title: "Limca", url: "images/limca.jpg", value: 10 },
    { title: "Kala Khatta", url: "images/kalaKhatta.jpg", value: 10 },
    { title: "Orange ", url: "images/orange.jpg", value: 10 },
    { title: "Pudina ", url: "images/pudina.jpg", value: 10 },
    { title: "Jeera", url: "images/jeera.jpg", value: 10 },
    { title: "Fruit Beer", url: "images/fruitBeer.jpg", value: 10 },
    { title: "Blueberry", url: "images/blueberry.jpg", value: 10 },
    { title: "Lemon ", url: "images/lemon.jpg", value: 10 },
    { title: "Strawberry ", url: "images/strawberry.jpg", value: 10 },
    { title: "Cola", url: "images/cola.jpg", value: 10 },
    { title: "Limbo Masala", url: "images/15/masala.jpg", value: 15 },
    { title: "Sweet Limbo", url: "images/15/sweetlemon.jpg", value: 15 },
    { title: "Salty Limbo", url: "images/15/saltyLemon.jpg", value: 15 },
    { title: "Ginger Limbo", url: "images/15/ginger.jpg", value: 15 },
    { title: "Nimbu Sharbat", url: "images/15/nimbuSharbat.jpg", value: 15 },
  ];


  
  return (
    <div className='cards'>
      <Banner/>
      <h2 className={styles.header_dark}>Best Sellers</h2>
      {bestSellers.map((soda, index) => {
        return (
          <Card
            key={soda.title}
            title={soda.title}
            image={soda.url}
            countAppend={props.countAppend}
            value={soda.value}
          />
        );
      })}

      <h2 className={styles.header_dark}>MENU</h2>
      {sodas.map((soda) => {
        return (
          <Card
            key={soda.title}
            title={soda.title}
            image={soda.url}
            value={soda.value}
          />
        );
      })}
      <div className='about'>
        <About />
      </div>
    </div>
  );
}
