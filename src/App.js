/** @format */
import "./App.css";
import Navbar from "./Componants/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cards from "./Componants/Cards";
import About from "./Componants/About";
function App() {
  return (
    <Router>
      <Navbar />
      <div className='cards'>
        <Routes>
          <Route path='/' element={<Cards />}/>
          <Route path='/' element={<About />}/>
        </Routes>
      </div>
      <div className="about"><About/></div>
      
    </Router>
  );
}

export default App;
