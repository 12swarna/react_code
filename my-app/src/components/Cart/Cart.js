import Classes from './Cart.module.css';
import Modal from '../UI/Modal';
const Cart=(props)=>{
    
    
    const CartItems=<ul className={Classes['cart-items']}>{[{id:"c1",name:"shushi",amount:2,price:12.99,}].map((item) =><li key={item.id}>{item.name}</li>)}</ul>;
    return (

        <Modal onClose={props.onClose}>
            {CartItems}
            <div className={Classes.total}>
                <span >Total Amount</span>
                <span >34.90</span>
            </div>
            <div className={Classes.action}>
                <button className={Classes['button--alt']} onClick={props.onClose}>close</button>
                <button className={Classes.button}>order </button>
            </div>
        </Modal>

    );
}
export default Cart;