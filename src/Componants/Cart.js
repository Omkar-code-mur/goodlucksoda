import React, { useEffect, useState } from 'react'

import { useContext } from 'react'
import { Data } from '../App'

import styles from "./Cart.css"
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
    const handleMinus = ()=>{
      quantity = quantity-1

    }
  return (
    <div className='cartItem'>
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
   
      
    
  return (
    <div>
      <button className='btn btn-dark' onClick={()=>{data.d()}}>Discard all</button>
        {data.s.length > 0 &&
            array.map((soda)=>{
                const result = sodasX.find((obj) => obj.title === soda[0]);

                return(
                    <div>
                    <Item key={result} soda={result} quantity={soda[1]} />
                    </div>
                )
            })
        }
      
    </div>
  )
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
    <div className='price'>
        
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
        <div className="row">
            <div className="col">
            <Items/>
            </div>
            <div className="col">
            <Price/>
            </div>
        </div>
        
        
      
    </div>
  )
}
