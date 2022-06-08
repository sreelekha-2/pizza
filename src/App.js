
import Intro from "./components/Intro";
import Login from "./components/Login";
import Menu from "./components/Menu";
import Signup from "./components/Signup";
import Cart from "./components/Cart";
import Success from "./components/Success";
import "./App.css"

import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Checkout from "./components/Checkout";


function App() {
  return (

  <div className="container">
      <Router>
      <Routes>
        <Route path="/" element={<Intro/>}/>
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="/success" element={<Success/>}/>
      </Routes>
    </Router>
  </div>
  
   
  );
}

export default App;
