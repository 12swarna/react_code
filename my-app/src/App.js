import './App.css';
import Heading from './Componentsecondfolder/HeaderPart/Heading';
import DataShow from './Componentsecondfolder/HeaderPart/DataShow';
import { useState } from 'react';
import Cartrender from './Componentsecondfolder/Cartwork/Cartrender';

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
    <>
    <Heading size={cart.length} setshow={setshow}></Heading>
    {
      show ?<DataShow  cartHandler={ cartHandler}></DataShow>: <Cartrender cart={cart} setCart={setCart}></Cartrender>
    }
    
    {
      warning && <div className="warning">Item is already added to your cart</div>
    }
    </>
  )
}
export default App;