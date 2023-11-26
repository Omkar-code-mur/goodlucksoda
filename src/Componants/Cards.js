/** @format */

import React from "react";
import Card from "./Card";
import styles from "./Cards.module.css";
import About from "./Contact";
import Banner from "./Banner"; 
export default function Cards(props) {
  const bestSellers = [
    { title: "Jeera Soda", url: "images/jeera.jpg" },
    { title: "Fruit Beer Soda", url: "images/fruitBeer.jpg" },
    { title: "Blueberry Soda", url: "images/blueberry.jpg" },
    { title: "Sweet Limbo", url: "images/15/sweetlemon.jpg" },
  ];
  const sodas = [
    { title: "Mango Soda", url: "images/mango.jpg" },
    { title: "Limca Soda", url: "images/limca.jpg" },
    { title: "Kala Khatta ", url: "images/kalaKhatta.jpg" },
    { title: "Pudina Soda ", url: "images/pudina.jpg" },
    { title: "Pinapple Soda ", url: "images/pineApple.jpg" },
    { title: "Orange Soda", url: "images/orange.jpg" },
    { title: "Jeera Soda", url: "images/jeera.jpg" },
    { title: "Fruit Beer Soda", url: "images/fruitBeer.jpg" },
    { title: "Blueberry Soda", url: "images/blueberry.jpg" },

    { title: "Lemon Soda ", url: "images/lemon.jpg" },
    { title: "Strawberry Soda ", url: "images/strawberry.jpg" },
    { title: "Cola Soda", url: "images/cola.jpg" },
  ];
  const sodas15 = [
    { title: "Limbo Masala", url: "images/15/masala.jpg" },
    { title: "Sweet Limbo", url: "images/15/sweetlemon.jpg" },
    { title: "Salty Limbo", url: "images/15/saltyLemon.jpg" },
    { title: "Ginger Limbo", url: "images/15/ginger.jpg" },
    { title: "Nimbu Sharbat", url: "images/15/nimbuSharbat.jpg" },
  ];
  return (
    <div className='cards'>
      <Banner/>
      <h2 className={styles.header_dark}>Best Sellers</h2>
      {bestSellers.map((soda, index) => {
        let num = index + 1;
        return (
          <Card
            key={soda.title}
            title={"# " + num + " " + soda.title}
            image={soda.url}
            description='₹10'
            countAppend={props.countAppend}
            value={10}
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
            description='₹10'
            countAppend={props.countAppend}
            value={10}
          />
        );
      })}
      {sodas15.map((soda) => {
        return (
          <Card
            key={soda.title}
            title={soda.title}
            image={soda.url}
            description='₹15'
            value={10}
          />
        );
      })}
      <div className='about'>
        <About />
      </div>
    </div>
  );
}
