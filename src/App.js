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

  const saveData = () => {
    localStorage.setItem("sodas", JSON.stringify(sodas));
  };

  useEffect(() => {
    const storedData = localStorage.getItem("sodas");
    if (storedData) {
      setSodas(JSON.parse(storedData));
    }
  }, []);

  const DeleteData = () => {
    setSodas([]);
    saveData();
  };

  const appendSoda = (soda) => {
    setSodas((prevSodas) => {
      const newSodas = [...prevSodas, soda];
      localStorage.setItem("sodas", JSON.stringify(newSodas));
      return newSodas;
    });
  };
  const removeSoda = (soda) => {
    
    setSodas((prevSodas)=>{
      const temp = prevSodas;
      if (temp.includes(soda)) {
        const i = temp.indexOf(soda);
        temp.splice(i, 1);
      }
      localStorage.setItem("sodas", JSON.stringify(temp));
      return temp
    })
  };

  return (
    <Data.Provider
      value={{ s: sodas, a: appendSoda, r: removeSoda, d: DeleteData }}>
      <Router>
        <Navbar />

        <Routes>
          <Route path='/' element={<Cards />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/bill' element={<Bill />} />
        </Routes>
      </Router>
    </Data.Provider>
  );
}

export default App;
export { Data };
