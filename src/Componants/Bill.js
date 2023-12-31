/** @format */

import React, { useEffect, useState } from "react";

import { useContext } from "react";
import { Data } from "../App";

import styles from "./Bill.module.css";

import { sodas as sodasX } from "./utils";
let snum = 0;

function Item({ soda, quantity }) {
  return (
    <tr>
      
      <td>{(snum += 1)}</td>
      <td>{soda.title}</td>
      <td>{quantity}</td>
      <td>{soda.value * quantity}</td>
    </tr>
  );
}

function Items() {
  let data = useContext(Data);
  const result = data.s.reduce((acc, name) => {
    // Check if the name is already in the accumulator object
    if (acc[name]) {
      // If the name is already in the object, increment its frequency by one
      acc[name]++;
    } else {
      // If the name is not in the object, initialize its frequency to one
      acc[name] = 1;
    }
    // Return the updated accumulator object
    return acc;
  }, {}); // Initialize the accumulator object to an empty object

  // Convert the accumulator object into an array of key-value pairs
  const array = Object.entries(result);
  let today = new Date(Date.now());

  return (
    <div className='container'>
      <h1>Invoice</h1>

      <div className={styles.invoice}>
        <ul>
          <li>Invoice No. : {Math.floor(Math.random() * 1000)}</li>
          <li>
            Invoice Date :{" "}
            {`${today.getDate()}/${today.getMonth()}/${today.getFullYear()}`}
          </li>
          <li>
            Invoice Date :{" "}
            {`${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`}
          </li>
          <li></li>
        </ul>
      </div>
      <table>
        <thead>
          <tr>
            <td>S No.</td>
            <td>Description</td>
            <td>Qty</td>
            <td>Total</td>
          </tr>
        </thead>
        <tbody>
          {data.s.length > 0 &&
            array.map((soda) => {
              const result = sodasX.find((obj) => obj.title === soda[0]);

              return <Item key={result} soda={result} quantity={soda[1]} />;
            })}
        </tbody>
      </table>
    </div>
  );
}

function Price() {
  
  let sodas = useContext(Data);
  let p = 0;
  let q = 0;
  const [totalPrice, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  useEffect(() => {
    setPrice(p);
    setQuantity(q);
  }, [p, q]);

  const handlePrint = async () => {
    window.print();
  };

  return (
    <div className='container'>
      {sodas.s.length > 0 &&
        sodas.s.map((soda) => {
          const result = sodasX.find((obj) => obj.title === soda);
          p = p + result.value;
          q = q + 1;
          return console.log("hello");
        })}

      <div className='container my-2'>
        Total Quatity : {quantity} units <br />
        Total Cost : ₹{totalPrice}
      </div>
      <button className={`btn btn-success my-3 `} onClick={handlePrint}>
        Print Bill
      </button>
    </div>
  );
}

export default function Bill() {
  return (
    <div className={styles.bill}>
      <Items />

      <Price />
    </div>
  );
}
