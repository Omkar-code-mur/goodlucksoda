/** @format */

import React, { useCallback, useEffect, useMemo, useState } from "react";

import { useContext } from "react";
import { Data } from "../App";

import styles from "./Cart.module.css";
import { Link } from "react-router-dom";
import { sodas as sodasX } from "./utils";
function Item({ soda, initialq }) {
  let data = useContext(Data);

  const [quantity, setQuantity] = useState(initialq);

  const handleAdd = useCallback(() => {
    setQuantity(quantity + data.a(soda.title));
  }, [data, soda.title, quantity]);

  const handleMinus = useCallback(() => {
    // Check if the quantity is greater than zero
    if (quantity > 0) {
      // Remove the soda from the context state
      console.log(data.s)
      data.r(soda.title);
      setQuantity(quantity - 1);
      console.log(data.s)
    }
  }, [data, quantity, soda.title]);
  useEffect(() => {}, [soda, initialq, data.s, handleAdd, handleMinus]);
  console.log(quantity, initialq);

  return (
    <div className={styles.cartItem}>
      <img className={styles.image} src={soda.url} alt={soda.title} />

      <h2 className={styles.text}>
        {soda.title} <b>₹{soda.value}</b>
      </h2>
      <h2>quantity:{quantity}</h2>
      <div className='qty'>
        <button className='btn btn-dark mx-2' onClick={handleAdd}>
          +
        </button>
        <button className='btn btn-dark' onClick={handleMinus}>
          -
        </button>
      </div>
    </div>
  );
}

// Use named exports instead of default exports for better code completion and refactoring
export function Items() {
  // Use the useContext hook to access the data context
  const data = useContext(Data);

  // Use the useMemo hook to memoize the result of the reduce function
  // This will avoid recomputing the result on every render unless data.s changes
  const result = useMemo(() => {
    // Use a more descriptive name for the accumulator object, such as frequency
    // Use the Object.fromEntries method to convert the array of key-value pairs into an object
    return (
      // Use the reduce method to count the frequency of each soda name in data.s
      data.s.reduce((frequency, name) => {
        // Use the spread operator to copy the previous frequency object
        // Use the bracket notation to access and update the frequency of the current name
        // Use the logical OR operator to assign a default value of zero if the name is not in the object
        return { ...frequency, [name]: (frequency[name] || 0) + 1 };
      }, {}) // Initialize the frequency object to an empty object
    );
  }, [data.s]); // Pass data.s as a dependency array to the useMemo hook
  console.log(result);
  return (
    <div className={styles.items}>
      <button className='btn btn-dark' onClick={() => data.d()}>
        Discard all
      </button>
      {data.s.length > 0 &&
        // Use the Object.entries method to convert the result object into an array of key-value pairs
        // Use array destructuring to assign the key and value to soda and quantity variables
        Object.entries(result).map(([soda, quantity]) => {
          // Use the find method to find the soda object that matches the soda name
          const sodaObject = sodasX.find((obj) => obj.title === soda);

          return (
            <div key={soda}>
              <Item soda={sodaObject} initialq={quantity} />
            </div>
          );
        })}
    </div>
  );
}

function Price() {
  let sodas = useContext(Data);
  const [totalPrice, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    // Initialize the price and quantity variables to zero
    let p = 0;
    let q = 0;

    // Loop through the sodas.s array and calculate the price and quantity
    sodas.s.forEach((soda) => {
      const result = sodasX.find((obj) => obj.title === soda);
      p = p + result.value;
      q = q + 1;
    });

    // Update the state with the calculated values
    setPrice(p);
    setQuantity(q);
    console.log(sodas.s.length);
  }, [sodas.s]); // Pass sodas.s as a dependency array to the useEffect hook

  return (
    <div className={styles.price}>
      <h2>Total Cost : ₹{totalPrice}</h2>
      <h3>Total Quatity : {quantity} units</h3>
      <button className="btn btn-primary my-3">
        <Link to="/bill"> Generate bill</Link>
      </button>
    </div>
  );
}


export default function Cart() {
  return (
    <div className='cart'>
      <div className={styles.row}>
        <div className={styles.col}>
          <Items />
        </div>
        <div className={styles.col}>
          <Price />
        </div>
      </div>
    </div>
  );
}
