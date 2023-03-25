import './ExpenseItem.css';

function ExpenseItem(props){
    
    
    return (
        <div>
            <div className="firstclass">
        <h1>Expense Item !</h1>
</div>
        
        <div>
            <h1 className="items">ITEMS DETAILS</h1>
            </div>
        
        <div className="location">
            
           
            <h1>{props.details}</h1>
            
        </div>
        <h3 className="firstitem" >Food Rs 10 </h3>
        <h3 className="seconditem" >Petrol Rs 100 </h3>
        <h3 className="thirditem">Movie Rs 200</h3>
        </div>
    );
}
export default ExpenseItem;