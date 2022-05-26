import { BrowserRouter as Router,   Routes,   Route,   Link } from "react-router-dom";
import './App.css';
import Home from './Home';
import AboutUs from './AboutUs';
import Advice from './Advice';
import ContactUs from './ContactUs';
import Sale from "./Sale";
import Footer from "./Footer";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { BsPerson } from "react-icons/bs";
import { BiMenuAltLeft } from "react-icons/bi";
import { IoIosClose } from "react-icons/io";
import React, { useState } from 'react';



function App (){

  const [responsive, setResponsive] = useState(false);

 

  const showCart= ()=> {
    const cartUsers = document.getElementById('cart');
    if (cartUsers.style.display === "none") {
      cartUsers.style.display = "block";
    } else {
      cartUsers.style.display = "none";
    }
   }

  return(
    <div className="App">
      <Router> 
      <div className='heading'>
            <h1>HOME DECOR</h1>
            <h3>Our store offers  unique and eye-catching contemporary home accessories that you need for your home</h3>
       </div>
     
          <nav>
            <div className="hamburgerDiv" onClick={() => setResponsive(!responsive)}>{responsive ? <IoIosClose  className="hamburger"/> : <BiMenuAltLeft className="hamburger"/>}</div>
            <div className= {responsive ? "navigationMenu expanded" : "navigationMenu"}>
              <ul>
             <Link to = "/" className='link'>Shop</Link>
             <Link to = "/aboutUs" className='link'>About</Link>
             <Link to = "/advice" className='link'>Advice</Link>
             <Link to = "/sale" className='link red'>Sale</Link>
             <Link to = "/contactUs" className='link'>Contact Us</Link>
             </ul>
            </div> 
             <div className=' symbol'>
              <div className='symbol-link '><BsPerson/></div>
              <div className="symbol-link two cart" onClick={()=>{showCart()}} >< HiOutlineShoppingBag/></div>
            
             </div>
             
          </nav>

          <Routes>
             <Route path = "/" element={<Home/>}/>
             <Route path = "/aboutUs" element={<AboutUs/>}/>
             <Route path = "/advice" element={<Advice/>}/>
             <Route path = "/sale" element={<Sale/>}/>
             <Route path = "/contactUs" element={<ContactUs/>}/>
          </Routes>
          </Router>
      
          <Router> 
          <Footer/>
          </Router>
    </div>
  )
}

export default App;