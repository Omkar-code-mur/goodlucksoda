/** @format */
import "./App.css";
import Navbar from "./Componants/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cards from "./Componants/Cards";
import Contact from "./Componants/Contact";
import { useState } from "react";
import About from "./Componants/About";
function App() {
  const [count, setCount] = useState(0);

  const countAppend = () => {
    setCount(count + 1);
  };

  return (
    <Router>
      <Navbar count={count} />
      
      <div className='cards'>
        <Routes>
          <Route path='/' element={<Cards countAppend={countAppend} />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
