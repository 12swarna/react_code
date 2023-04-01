import './ExpenseFilter.css'

const Addingfilter=()=>{
    return(
        <>
        <card>
            
            <h1 className='filter'>FILTER THIS YEAR </h1>
            <select className='select'>
                <option>2021</option>
                <option>2022</option>
                <option>2023</option>
                <option>2024</option>
            </select>
            </card>
        </>

    );

}
export default Addingfilter;