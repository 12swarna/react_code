import Card from '../Card/Card';
import productsArr from './../../Data';
const  DataShow=({cartHandler})=>{
    return(
        <>
        {
            productsArr.map((list)=>{
               return  <Card list={list}  key={list.id} cartHandler={cartHandler}> 

                </Card>

            })
        }
        </>

    );
}
export default DataShow;