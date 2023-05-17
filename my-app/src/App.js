import './App.css';
import Heading from './Componentsecondfolder/HeaderPart/Heading';
import DataShow from './Componentsecondfolder/HeaderPart/DataShow';
import { useState } from 'react';
import Cartrender from './Componentsecondfolder/Cartwork/Cartrender';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Aboutpage from './Componentsecondfolder/HeaderPart/Aboutus';


function App(){
  const[show,setshow]=useState(true);
  const[cart,setCart]=useState([]);
  const[warning,setwarning]=useState(false);
  

  const cartHandler=(list)=>{
    let ispresent=false;
    cart.forEach((product)=>{
      if(list.id === product.id)
      ispresent=true;
    })
    if(ispresent){
    setwarning(true);
    setTimeout(()=>{
      setwarning(false);
    },2000)
    return;
  }
    setCart([...cart,list]);

  }
  return(
    <Router>
    <Heading size={cart.length} setshow={setshow}></Heading>

    <Routes>
      
      <Route path='/store' element={ <DataShow cartHandler={cartHandler}></DataShow> }> </Route>

      <Route path='/cart' element={show ?  <DataShow cartHandler={cartHandler}></DataShow>:
      <Cartrender cart={cart} ></Cartrender> }> </Route>

      <Route path='/about' element={<Aboutpage ></Aboutpage>}> </Route>
    </Routes>
   
    
    {
      warning && <div className="warning">Item is already added to your cart</div>
    }
    </Router>
  )
}
export default App;