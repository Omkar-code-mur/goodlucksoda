/** @format */

import Card from "./Componants/Card";
import "./App.css";
import Navbar from "./Componants/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



const sodas = [
  { title: "Orange Soda", url: "images/orange.jpg" },
  { title: "Jeera Soda", url: "images/jeera.jpg" },
  { title: "Fruit Beer Soda", url: "images/fruitBeer.jpg" },
  { title: "Blueberry Soda", url: "images/blueberry.jpg" },
  { title: "Mango Soda", url: "images/mango.jpg" },
  { title: "Limca Soda", url: "images/limca.jpg" },
  { title: "Kala Khatta ", url: "images/kalaKhatta.jpg" },
  { title: "Pudina Soda ", url: "images/pudina.jpg" },
  { title: "Pinapple Soda ", url: "images/pineApple.jpg" },
  { title: "Lemon Soda ", url: "images/lemon.jpg" },
  { title: "Strawberry Soda ", url: "images/strawberry.jpg" },
  { title: "Cola Soda", url: "images/cola.jpg" }
];
const sodas15 = [
  
  { title: "Limbo Masala", url: "images/15/sweetLemon.jpg" },
  { title: "Sweet Limbo", url: "images/15/masala.jpg" },
  { title: "Salty Limbo", url: "images/15/saltyLemon.jpg" },
  { title: "Ginger Limbo", url: "images/15/ginger.jpg" },
  { title: "Nimbu Sharbat", url: "images/15/nimbuSharbat.jpg" },
]



function App() {
  return (
    <Router>
      <Navbar/>
      <div className='cards'>
        <Routes>
          {/* <Route path='/' element={<Card image={orange}/>} /> */}
          <Route
            path='/home'
            element={
              <Card title='orange' image="images/orange.jpg" description='₹10' />
            }
          />
          <Route path='/about' element={<Card />} />
        </Routes>
        {sodas.map((soda)=>{
          return(
            <Card key = {soda.title} title={soda.title} image={soda.url} description='₹10' value={10} />
          )
          
          
        })}
        {sodas15.map((soda)=>{
          return(
            <Card key = {soda.title} title={soda.title} image={soda.url} description='₹15' value={10}/>
          )
          
          
        })}
        
        
      
      </div>
    </Router>
  );
}

export default App;
