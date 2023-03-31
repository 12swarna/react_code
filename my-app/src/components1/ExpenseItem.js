import React ,{useState} from 'react';
import './ExpenseItem.css'
import Card from './Card';


function ExpanseItem(props){
  const [title, setTitle] = useState(props.title);
  const [amount,setAmount]=useState(props.amount);
  const edithandler=()=>{
    setAmount("$100");//it is for updating amount//
    console.log(amount);

    setTitle('updated!')// it is for upadating title//
        console.log(title); 
  }
  
  
    
    
    const clickHandler=(event)=>{
       event.target.parentNode.remove()//this line means event target to remove parentnode //


      // title='Updated'  this is beacuse this is react rule//
      // console.log(title)
        
        // console.log("click me");

         

       
    }

    return(
        <>
        <Card>
            <div>
        <h1 className='expanse'>Expanse items!</h1>
        
        </div>
        <div className='details'>
            <div>
        <h1 className='location'>locationofexpenditure </h1>
        <ul className='ul'>
        <li className='lo1'> food : {title}:{amount}</li>
        <li className='lo2'> petrol: {amount}</li>
        <li className='lo3'>Movies:{amount}  </li>
        
        <button className='butto' onClick={clickHandler}>DeleteExpense</button>
        <button className="butto1" onClick={edithandler}>EditExpense</button>
        
        </ul>
        </div> 
        </div>
        

        </Card>
        
        </>
       

    );

}
export default ExpanseItem;