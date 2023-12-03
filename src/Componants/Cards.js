/** @format */

import React from "react";
import Card from "./Card";
import styles from "./Cards.module.css";
import About from "./Contact";
import Banner from "./Banner"; 

import { bestSellers, sodas } from "./utils";
export default function Cards(props) {


  
  return (
    <div className={styles.cards}>
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
