import { useRef, useState } from 'react';
import './Firstproject.css';

import Wrapper from './Wrapper';

const Firstproject = (props) => {
  const [isValid, setIsValid] = useState(false);
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const collegeInputRef=useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const name = nameInputRef.current.value;
    const age = ageInputRef.current.value;
    const college=collegeInputRef.current.value;
    console.log(name,age,college);

    if (name.trim().length === 0 || age.trim().length === 0 || college.trim().length ===0) {
      window.alert('Please enter a valid username,age and collegename');
      setIsValid(true);
      return;
    }

    if (age <= 0) {
      window.alert('Please enter an age greater than 0');
      setIsValid(true);
      return;
    }
     //making list//
    const list = document.createElement('li');
    list.className = 'list';
    const unorderedList = document.getElementById('ul');
    unorderedList.appendChild(list);
    list.innerText = `${name} (${age} years old) ${college}`;

    setIsValid(false);
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
    collegeInputRef.current.value='';
  };

  return (
    <Wrapper className='thisdiv'>
      <form className='firstform' onSubmit={submitHandler}>
        <div className={`firstdiv ${isValid ? 'invalid' : ''}`}>
          <label className='user'>Username</label>
          <input className='user1' type='text' ref={nameInputRef} />
        </div>
        <div className={`middlediv ${isValid ? 'invalid' : ''}`}>
            <label className='college_name'>COLLEGE NAME</label>
            <input type="text" className='college' ref={collegeInputRef}></input>
        </div>
        <div className={`seconddiv ${isValid ? 'invalid' : ''}`}>
          <label className='user2'>Age (years old)</label>
          <input className='user2again' type='number' ref={ageInputRef} />
        </div>
        <button type='submit' className='button'>
          Add User
        </button>
      </form>
      <ul id='ul'></ul>
    </Wrapper>
  );
};

export default Firstproject;
