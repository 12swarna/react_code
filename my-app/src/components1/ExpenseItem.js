import './ExpenseItem.css'
import Card from './Card';

function expanseitem(props){
    const locationfirst="Rs 10";
    const locationsecond="Rs 100";
    const locationthird="Rs 200";
    
    const clickHandler=(event)=>{
      event.target.parentNode.remove()//this line means event target to remove parentnode //
        
        console.log("click me");
    }

    return(
        <Card>
            <div>
        <h1 className='expanse'>Expanse items!</h1>
        
        </div>
        <div className='details'>
            <div>
        <h1 className='location'>locationofexpenditure </h1>
        <ul className='ul'>
        <li className='lo1'> food :{locationfirst} {props.title}:{props.amount}</li>
        <li className='lo2'> petrol:{locationsecond} {props.amount}</li>
        <li className='lo3'>Movies:{locationthird}  </li>
        <button className='butto' onClick={clickHandler}>DeleteExpense</button>
        
        </ul>
        </div> 
        </div>

        </Card>

    );

}
export default expanseitem;