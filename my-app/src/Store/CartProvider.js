import CartContext from "./Cart-context";
import { useReducer } from "react";
const defaultCartState={
    items:[],
    totalAmount:0
}
const cartReducer=(state,actions)=>{
    if(actions.type === "ADD"){
        const UpdateTime=state.items.concat(actions.item);
        const UpdateTotalAmount=state.totalAmount+actions.item.price*actions.item.amount;
return{
    items:UpdateTime,
    totalAmount:UpdateTotalAmount
};
    }
    return defaultCartState;
}
const CartProvider=(props)=>{
   const[cartstate,dispatchCartAction] =useReducer(cartReducer,defaultCartState);
    const addItemToCartHandler=(item)=>{
        dispatchCartAction({type:"ADD",item:item});

    }
    const removeItemCartHandler=(id)=>{
        dispatchCartAction({type:"Remove",id:id});

    }
    const cartContext={
        items:cartstate.items,
        totalAmount:cartstate.totalAmount,
        addItem:addItemToCartHandler,
        removeItem:removeItemCartHandler
    }
    return<CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>

}
export default CartProvider;