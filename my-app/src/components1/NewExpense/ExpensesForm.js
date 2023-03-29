import React from 'react';
import './ExpensesForm.css';


const Expenseform=()=>{
    const titlehandler=(event)=>{
        console.log(event.target.value);
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
            <input type="number" onChange={titlehandler}/>
          
            </div>
            <div className='date'> 
                <label>DATE</label>
                <input type="date" onChange={titlehandler}/>
            </div>
            <div className='button'> 
            <button >SUBMIT IT</button>
            </div>
            
            
            </div>
        </form>

    );
    

}

export default Expenseform;
