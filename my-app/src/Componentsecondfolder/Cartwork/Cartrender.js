import { useState } from "react";
import './Cart.css';

const Cartrender=({cart})=>{
    const[price,setprice]=useState(0);

    
    return(
        <article>
{
    cart.map((list)=>{
       return  <div  className=" cart_box" key={list.id}>
            <div className="cart_img">
                <img src={list.imageUrl} alt="noimage"></img>
                <p>{list.location}</p>

            </div>
            <div>
                <button>+</button>
                <button>{list.id}</button>
                <button>-</button>
            </div>

            <div>
                <span>{list.price}</span>
                <button>Remove</button>

                </div>

        </div>
    })

}
<div className="total"> 
    <span>Total price of Cart </span>
    <span>Rs:{price}</span>
</div>
      
        </article>

    );
}
export default Cartrender;