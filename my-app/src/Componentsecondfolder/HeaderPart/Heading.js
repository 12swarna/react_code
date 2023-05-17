import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import SecondHeading from '../MiddlePart/SecondHeading';
import { Link } from 'react-router-dom';




const Heading=({size,setshow})=>{
    return(
      
        <nav>
              <Navbar bg="dark" expand="lg">


              
              <Nav.Link as={Link} to="/home"style={{color:"white",marginLeft:"350px"}}>Home</Nav.Link>

            <Nav.Link as={Link}  to="/store" style={{color:"white",marginLeft:"150px"}}onClick={()=>setshow(true)}>store</Nav.Link>

            <Nav.Link  as={Link} to="/about" style={{color:"white" ,marginLeft:"150px"}}>Aboutpage</Nav.Link>

            <Button as={Link} to="/cart"variant="dark" style={{marginLeft:"380px",border:"3px solid skyblue",borderRadius:"10px"}} onClick={()=>setshow(false)}>cart</Button>

            <span style={{color:"skyblue",marginTop:"-15px",fontSize:"20px"}}>{size}</span>


              </Navbar>
              <SecondHeading></SecondHeading>
        
        </nav>

    );
}
export default Heading;