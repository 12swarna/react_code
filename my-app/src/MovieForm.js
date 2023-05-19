
import './MovieForm.css';
import { useRef } from 'react';

const MovieForm=()=>{
let title=useRef(null);
let openingtext=useRef(null);
let date=useRef(null);

    function formHandling(event){
        event.preventDefault();


        const titleValue = title.current.value;
        const openingtextValue = openingtext.current.value;
        const dateValue = date.current.value;
    
        console.log('Title:', titleValue);
        console.log('Opening Text:', openingtextValue);
        console.log('Release Date:', dateValue);
        

    }
    return(
        <form>
        <div className='firstdiv'>
        <label>Title</label>
        <input type="text" ref={title}></input>
        </div>

        <div className='seconddiv'> 
            <label>OpeningText</label>
            <input type="text" ref={openingtext}></input>
        </div>
        <div className='thirddiv'>
            <label>Release Date</label>
            <input type="date" ref={date}></input>
        </div>
        <div>
            <button type="submit" className='butto' onClick={formHandling}>Add movies</button>
        </div>



        </form>

    );
}
export default MovieForm;