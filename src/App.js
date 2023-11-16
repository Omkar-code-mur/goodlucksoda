/** @format */

import Card from "./Componants/Card";
// import orange from "../public/images/orange-soda"

import "./App.css";
import Navbar from "./Componants/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const orange = require.context(
  "D:/Omkar/Carrier related/WEB/react Projects/goodlucksoda/public/images/orange",
  true
);
const cola = require.context(
  "D:/Omkar/Carrier related/WEB/react Projects/goodlucksoda/public/images/cola",
  true
);
const jeera = require.context(
  "D:/Omkar/Carrier related/WEB/react Projects/goodlucksoda/public/images/jeera",
  true
);
const limbo = require.context(
  "D:/Omkar/Carrier related/WEB/react Projects/goodlucksoda/public/images/limbo",
  true
);
const blueberry = require.context(
  "D:/Omkar/Carrier related/WEB/react Projects/goodlucksoda/public/images/blueberry",
  true
);

const orangeList = orange.keys().map((image) => orange(image));
const colaList = cola.keys().map((image) => cola(image));
const jeeraList = jeera.keys().map((image) => jeera(image));
const limboList = limbo.keys().map((image) => limbo(image));
const blueberryList = blueberry.keys().map((image) => blueberry(image));

const sodas = [
  { title: "Orange Soda", url: orangeList[0] },
  { title: "Cola Soda", url: colaList[0] },
  { title: "Jeera Soda", url: jeeraList[0] },
  { title: "Limbo Soda", url: limboList[0] },
  { title: "Blueberry Soda", url: blueberryList[0] },
];
function App() {
  return (
    <Router>
      <Navbar />
      <div className='cards'>
        <Routes>
          {/* <Route path='/' element={<Card image={orange}/>} /> */}
          <Route
            path='/home'
            element={
              <Card title='orange' image={orangeList[0]} description='Rs 10' />
            }
          />
          <Route path='/about' element={<Card />} />
        </Routes>
        {sodas.map((soda)=>{
          return(
            <Card key = {soda.title} title={soda.title} image={soda.url} description='Rs 10' />
          )
          
          
        })}
        
        
      
      </div>
    </Router>
  );
}

export default App;
