import React from 'react';
import './Secondproject.css'


import { useRef } from 'react';

const Form=( )=>{

    

    const emailInputref=useRef();
    const passwordInputref=useRef();


    const formhandler=(event)=>{
        event.preventDefault()
        const email=emailInputref.current.value;
        const password=passwordInputref.current.value;
        console.log(email,password);
        event.target.childNode.remove();

    }

    return(
        <div>
            <h1 id="head">A TYPICAL PAGE</h1>
            <form className="form" onSubmit={formhandler}>
                <div className="email">
                <label className="email1">E-mail</label>
                <input type="email" className="inputemail" ref={emailInputref}></input>
                </div>
                 <div className="pas">
                <label className="pas1">Password</label>
                <input type="password" ref={passwordInputref}></input>
                </div>
                <div className="butto">
                <button type="submit" className="butto1" >Login</button>
                </div>
                
            </form>

        </div>

    );
}
export default Form;