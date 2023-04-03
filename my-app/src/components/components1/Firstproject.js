import { useState } from 'react';
import './Firstproject.css'
const Firstproject=( props)=>{
    const[firstusername,setfirstusername]=useState("");
    const[agedetails,setagedetails]=useState("");
    const[isValid,setisvalid]=useState("true");

    const usernamehandler=(event)=>{
        setfirstusername(event.target.value)
    }
    const agehandler=(event)=>{
        setagedetails(event.target.value);
    }
    const submithandler=(event)=>{
        event.preventDefault();
        if(firstusername.trim().length === 0 || agedetails.trim().length === 0 ){
            window.alert("please enter valid username and age");
            setisvalid(true);
            return;

        }
        if(agedetails.trim() <=0){
            window.alert("please enter age <=0");
            return;
        }

        
        const form={
            username:firstusername,
            age:agedetails

        }
        console.log(`${form.username} ${form.age} years old `);
         
        //create list//
        let list=document.createElement("li");
        list.className="list";
        let unoderedlist=document.getElementById("ul");
        unoderedlist.appendChild(list);
        list.innerText=`${form.username} (${form.age} years old )`;
        
       

    }
    return(
        <div className='thisdiv'>
        <form className="firstform" onSubmit={submithandler}>
           <div className={`firstdiv ${!isValid ? 'invalid' :" "}`} >
            <label className='user'  >USERNAME</label>
            <input className="user1" type="text" onChange={usernamehandler} />

            </div>
          <div className='seconddiv'>
            <label className='user2'  >Age(years old)</label>
            <input className="user2again" type="number" onChange={agehandler} />

            </div>
            <button type="submit" className='butto'>Add Users</button>
           
        </form>
        <ul id="ul"></ul>
        
        </div>

    );

}
export default Firstproject;