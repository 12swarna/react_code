import React ,{useState} from 'react';

import './ExpensesForm.css';

//this is for submitting form details on console.//
const Expenseform=(props)=>{

    //this is multiusestates but now we change in single use states //
    const[entertitle,setitle]=useState("");
    const[enteramount,setamount]=useState("");
    const[enterdate,setdate]=useState("");



    const submitHandler=(event)=>{
        event.preventDefault();
        const Details={
            title:entertitle,
            amount:enteramount,
            date: new Date(enterdate)

        }
        // console.log(Details.title);
        // console.log(Details.amount);
        // console.log(Details.date);
        props.savedata(Details)
        setitle('');
        setamount('');
        setdate('');
        

       

    }

   
    
    //singel usestes usses in object form//
    // const [userInput,setInputUser]=useState({
    //     entertitle:'',
    //     enteramount:'',
    //     enterdate:''

    // });

    const titlehandler=(event)=>{
        setitle(event.target.value);
        // console.log(entertitle);


        // setInputUser({
        //     ...userInput,
        //     entertitle:event.target.value,
            
        // })
        
    }
    const Amounthandler=(event)=>{
        setamount(event.target.value);
        // console.log(enteramount)


        // setInputUser({
        //     ...userInput,
        //     enteramount:event.target.value,

        // });

        //new way to update//
        // setInputUser((prevstate)=>{
        //     return {...prevstate,entertitle:event.target.value};

        // });
    }
    const Datehandler=(event)=>{
        setdate(event.target.value);
        // console.log(enterdate);

        // setInputUser({
        //     ...userInput,
        //     enterdate:event.target.value,
        // })
    }
   
    
    
    return(
        <form className='firstform' onSubmit={submitHandler}>
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
