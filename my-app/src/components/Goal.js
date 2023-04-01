import './Goal.css'
import {useState} from  "react";
 

const StartGoalPage=()=>{
   const [entercourse,setcourse] =useState('');
    const[isValid,setIsValid]=useState("true");
    const[isTouched,settouched]=useState("false");
    

    const goalInputChangeHandler=(event)=>{
        settouched(true);
        if(event.target.value.trim().length > 0){
            setIsValid(true);
            

        }
        setcourse(event.target.value);
    }

    const SubmitHandler=(event)=>{
        event.preventDefault();
        if(entercourse.trim().length === 0){
            setIsValid(false);
            return;

        }
        const course={
            first:entercourse
        }
        console.log(course.first);

        //making li and set into ul//
        let list=document.createElement("li");
        list.innerText=course.first;
        list.className="list";
        let unoderedlist=document.querySelector(".ul");
        unoderedlist.appendChild(list)
    
        
        
    }
   
    
    return(
        <>
        
            <form className="myform" onSubmit={SubmitHandler}>
                <div className={`goal-course  ${!isValid  && isTouched ? 'invalid': 'isvalid'}`}>
                <label className="labeling">COURSE GOAL!</label>
                
                
                <input type="text" className="input"  onChange={goalInputChangeHandler}></input>
               
                
                <button type="submit" className="button">ADD GOAL</button>
                </div>
                
            </form>
            <ul className='ul'>
                
            </ul>
        
        </>

    );

}
export default StartGoalPage;