import Button from 'react-bootstrap/Button';
import './Contactus.css';
import { useRef } from 'react';




const Contact=()=>{

    let Name=useRef("");
    let Email=useRef("");
    let PhoneNumber=useRef("");

   const dataHandling= async(event)=>{
    event.preventDefault();
                                //setting value on console//
    let Namevalue=Name.current.value;
    let Emailvalue=Email.current.value;
    let PhoneNumbervalue=PhoneNumber.current.value;
    console.log(Namevalue,Emailvalue,PhoneNumbervalue);

    //after my form is submit all detail goes from form box//
    Name.current.value="";
    Email.current.value="";
    PhoneNumber.current.value="";

    //sending data to firebase using fetch//
 try{ const response = await  fetch("https://reactdata-cdba6-default-rtdb.firebaseio.com/formData.json",{
    method:"POST",
    headers:{
        "Content-type":"application/json",
    },
    body:JSON.stringify({
    Name:  Namevalue,
    Email: Emailvalue,
    PhoneNumber:PhoneNumbervalue,

    }),

   
  });
  if(response.ok){
    alert("data stored")
}
else{
    alert("data not stored")
}

 }catch(error){
    console.log(error);
 }



   }

    return(
        <div className="box">
            <form>
                <div>
                    <label>Name</label>
                    <input type="text" placeholder='name' ref={Name}></input>
                </div>
                <br></br>

                <div>
                    <label>Email</label>
                    <input type="email" placeholder='email' ref={Email}></input>
                </div>
                <br></br>

                <div>
                    <label>PhoneNumber</label>
                    <input type="number" placeholder='phonenumber' ref={PhoneNumber} ></input>
                </div>

                <div>
                <Button  className="butto" variant="primary" onClick={dataHandling}>Submit</Button>
                </div>
            </form>
              
        </div>

    );
}
export default Contact;