import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import SecondHeading from '../MiddlePart/SecondHeading';

const Heading=({size,setshow})=>{
    return(
        <nav>
              <Navbar bg="dark" expand="lg">


              
              <Nav.Link href="#home" style={{color:"white",marginLeft:"350px"}}onClick={()=>setshow(true)}>Home</Nav.Link>

            <Nav.Link href="#link"  style={{color:"white",marginLeft:"150px"}}>store</Nav.Link>

            <Nav.Link href="#link" style={{color:"white" ,marginLeft:"150px"}}>About us</Nav.Link>

            <Button variant="dark" style={{marginLeft:"400px",border:"3px solid skyblue",borderRadius:"10px"}} onClick={()=>setshow(false)}>cart</Button>

            <span style={{color:"skyblue",marginTop:"-30px",fontSize:"20px"}}>{size}</span>


              </Navbar>
              <SecondHeading></SecondHeading>
        
        </nav>

    );
}
export default Heading;