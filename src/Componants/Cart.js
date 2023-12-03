import React, { useEffect, useMemo, useState } from 'react'

import { useContext } from 'react'
import { Data } from '../App'

import styles from "./Cart.module.css"
import { Link } from 'react-router-dom';
const sodasX = [
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
];;

function Item({soda,quantity,setQuantity}) {
  let data = useContext(Data);
    const handleAdd = ()=>{
      data.a(soda.title)

    }
    const handleMinus = () => {
      // Check if the quantity is greater than zero
      if (quantity > 0) {
        // Remove the soda from the context state
        data.r(soda.title);
      }
    };
    
  return (
    <div className={styles.cartItem}>
        <img className={styles.image} src={soda.url} alt={soda.title} />
        
        <h2 className={styles.text}>{soda.title} <b>₹{soda.value}</b></h2>
        <h2>quantity:{quantity}</h2>
        <div className='qty'>
          <button className='btn btn-dark mx-2' onClick={handleAdd}>+</button>
          <button className='btn btn-dark' onClick={handleMinus}>-</button>
        </div>
        
      
    </div>
  )
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
  console.log(result)
  return (
    <div className={styles.items}>
      <button className="btn btn-dark" onClick={() => data.d()}>
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
              <Item soda={sodaObject} quantity={quantity} />
            </div>
          );
        })}
    </div>
  );
}


function Price() {
    let sodas = useContext(Data);
    let p = 0;
    let q = 0;
    const [totalPrice,setPrice] = useState(0);
    const [quantity,setQuantity] = useState(0);

    useEffect(()=>{
        setPrice(p)
        setQuantity(q)
    },[p,q,sodas])

    

  return (
    <div className={styles.price}>
        
        {sodas.s.length > 0 &&
            sodas.s.map((soda)=>{
                const result = sodasX.find((obj) => obj.title === soda);
                p = p + result.value;
                q = q+1;
                return(console.log("heelo2"))
            })
        }
       
        
        <h2>Total Cost : ₹{totalPrice}</h2>
        <h3>Total Quatity : {quantity} units</h3>
        <button className="btn btn-primary my-3" > <Link to="/bill"> Generate bill</Link></button>
      
    </div>
  )
}



export default function Cart() {
  return (
    <div className='cart'>
        <div className={styles.row}>
            <div className={styles.col}>
            <Items/>
            </div>
            <div className={styles.col}>
            <Price/>
            </div>
        </div>
        
        
      
    </div>
  )
}
