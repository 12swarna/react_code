import './Cart.css';
import Modal from '../UI/Modal';

const Cart = (props) => {
  const cartItems = [
    { id: 'c1', name: 'sushi', amount: 2, price: 12.99 }
  ];

  const cartItemsList = cartItems.map((item) => (
    <li >{item.name}</li>
  ));

  return (
    <Modal>
      <ul className='cart-items'>{cartItemsList}</ul>
      <div className='total'>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className='action'></div>
      <button className='button--alt'>close me</button>
      <button className='button'>order</button>
    </Modal>
  );
};

export default Cart;
