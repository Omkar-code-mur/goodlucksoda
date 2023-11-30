/** @format */
import "./App.css";
import Navbar from "./Componants/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cards from "./Componants/Cards";
import Contact from "./Componants/Contact";
import { useState, createContext, useEffect } from "react";
import About from "./Componants/About";
import Cart from "./Componants/Cart";
import Bill from "./Componants/Bill";

const Data = createContext(null);
function App() {
  const [sodas, setSodas] = useState([]);


  

useEffect(() => {
  const storedData = localStorage.getItem('sodas');
  if (storedData) {
    setSodas(JSON.parse(storedData));
  }
}, []);

const saveData = () => {
  localStorage.setItem('sodas', JSON.stringify(sodas));
};
const DeleteData = () => {
  setSodas([])
  saveData()
};

  const appendSoda = async(soda) => {
    
    setSodas([...sodas, soda]);
    saveData()
    console.log(sodas)
    console.log(localStorage.getItem('sodas'))
  };
  const removeSoda = (soda) => {
    let temp = sodas;
    if (temp.includes(soda)) {
      let i = temp.indexOf(soda);
      temp.splice(i, 1);
    }
    setSodas([...temp, soda]);
    console.log(sodas);
  };


  

  return (
    <Data.Provider value={{ s: sodas, a: appendSoda, r: removeSoda , d:DeleteData }}>
      <Router>
        <div>
          
          <Navbar />

          <div className='cards'>
            <Routes>
              <Route path='/' element={<Cards />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/about' element={<About />} />
              <Route path='/cart' element={<Cart />} />
            </Routes>
          </div>
        </div>

        <Routes>
          <Route path='/bill' element={<Bill />} />
        </Routes>
      </Router>
    </Data.Provider>
  );
}

export default App;
export { Data };
