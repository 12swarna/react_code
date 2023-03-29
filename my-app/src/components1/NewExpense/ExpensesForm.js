import React ,{useState} from 'react';

import './ExpensesForm.css';


const Expenseform=()=>{
    const[entertitle,setitle]=useState("");
    const[enteramount,setamount]=useState("");
    const[enterdate,setdate]=useState("");

    const titlehandler=(event)=>{
        setitle(event.target.value);
        console.log(entertitle);
    }
    const Amounthandler=(event)=>{
        setamount(event.target.value);
        console.log(enteramount)
    }
    const Datehandler=(event)=>{
        setdate(event.target.value);
        console.log(enterdate);
    }
   
    
    
    return(
        <form className='firstform'>
            <div className='form'>
            <div className='title'>
            <label >TITLE</label>
            <input type="text" onChange={titlehandler}/>
            </div>

            <div className='amount'>
            <label>AMOUNT</label>
            <input type="number" onChange={Amounthandler}/>
          
            </div>
            <div className='date'> 
                <label>DATE</label>
                <input type="date" onChange={Datehandler}/>
            </div>
            <div className='button'> 
            <button >SUBMIT IT</button>
            </div>
            
            
            </div>
        </form>

    );
    

}

export default Expenseform;
