/** @format */
import "./App.css";
import Navbar from "./Componants/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cards from "./Componants/Cards";
function App() {
  return (
    <Router>
      <Navbar />
      <div className='cards'>
        <Routes>
          <Route  path="/" element={<Cards/>}>

          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
