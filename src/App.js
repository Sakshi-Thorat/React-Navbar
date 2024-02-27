// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter } from "react-router-dom";
import { Routes,Route } from "react-router-dom";
import Home from'./Component/Home';
import About from'./Component/About';
import  {Navbar}  from "./Component/Navbar";
import  Contact  from "./Component/Contact";
import  Address  from "./Component/Address";
import Login from"./Component/Login";
import Intro from"./Component/Intro";


function App() {
  return (
    <div>
    <Routes>
      <Route path="/" element={<Navbar></Navbar>}>
      <Route path="/" element={<Home></Home>}/>
      <Route path="about" element={<About></About>}/>
      <Route path="contact"element={<Contact></Contact>}/>
      <Route path="address"element={<Address></Address>}/>
      <Route path="login"element={<Login></Login>}/>
      <Route path="intro"element={<Intro></Intro>}></Route>
      </Route>
      
   </Routes>
   </div>
 
    
  );
}

export default App;
