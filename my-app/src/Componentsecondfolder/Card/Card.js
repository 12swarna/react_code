import { Button } from "react-bootstrap";
import './Card.css';

const Card=({list, cartHandler})=>{
    const{location,imageUrl,price}=list;
    return(
        <section className="cards">
            <div className="row">
            <div className="column">
                <p> {location}</p>
                <img src={imageUrl} alt="noimage"></img>
                
          
            
               
                <p className="para1"> price:${price}</p>
                <Button onClick={()=>cartHandler(list)} className="butto"variant="primary">Add to cart</Button>{''}
                </div>
            </div>
            
           

        </section>

    );
}
export default Card;