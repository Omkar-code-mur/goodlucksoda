/** @format */
import "./App.css";
import Navbar from "./Componants/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cards from "./Componants/Cards";
import Contact from "./Componants/Contact";
import { useState ,createContext} from "react";
import About from "./Componants/About";
import Cart from "./Componants/Cart";
import Bill from "./Componants/Bill";



const Data = createContext(null);
function App() {
  const [sodas, setSodas] = useState([]);

  const appendSoda = (soda) => {
    
    setSodas([...sodas,soda]);
    console.log(sodas)
  };
  const removeSoda = (soda) => {
    let temp = sodas
    if(temp.includes(soda)){
      let i = temp.indexOf(soda)
      temp.splice(i,1)
    }
    setSodas([...temp,soda]);
    console.log(sodas)
  };
  
  return (

    <Data.Provider value = {{s:sodas,a:appendSoda,r:removeSoda}} >
    <Router>
      <Navbar />
      
      <div className='cards'>
        <Routes>
          <Route path='/' element={<Cards />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/bill' element={<Bill />} />
        </Routes>
      </div>
    </Router>
    </Data.Provider>
  );
}

export default App;
export {Data};

