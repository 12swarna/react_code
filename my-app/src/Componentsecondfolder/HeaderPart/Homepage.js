
const Homepage=()=>{
    return(
        <div>
            <h1 style={{textAlign:"center",marginTop:"50px",border:"2px solid black",marginRight:"350px",marginLeft:"350px",color:"red"}}>Get our latest album</h1>
            
            <i class="fa-sharp fa-solid fa-circle-pause" style={{fontSize:"100px",marginLeft:"600px"}}></i>

<header>
    <h1 style={{textAlign:"center"}}>Tours</h1>
</header>

            <table  style={{marginLeft:"350px",marginTop:"20px"}}>
  <tr>
    <th>july 16 </th>
    <th>
        DETROIT, MI</th>
    <th >DTE ENERGY MUSIC THEATRE</th>
    <th><button   style={{backgroundColor:"green",marginLeft:"50px"}}type="submit">Buy tickets</button></th>
  </tr>
  <br></br>


  <tr>
  <th>july 19 </th>
    <th>
    TORONTO,ON
</th>
    <th>
BUDWEISER STAGE</th>
    <th><button type="submit"  style={{backgroundColor:"green",marginLeft:"50px"}}>Buy tickets</button></th>
  </tr>
  <br></br>


  <tr>
  <th>july 22 </th>
    <th>
BRISTOW, VA</th>
    <th>
JIGGY LUBE LIVE</th>
    <th><button style={{backgroundColor:"green",marginLeft:"50px"}} type="submit">Buy tickets</button></th>
  </tr>
  <br></br>


  <tr>
  <th>july 29 </th>
    <th>
PHOENIX, AZ</th>
    <th>
                      AK-CHIN PAVILION</th>
    <th><button  style={{backgroundColor:"green",marginLeft:"50px"}}type="submit">Buy tickets</button></th>
  </tr>
  <br></br>



  <tr>
  <th>august 2 </th>
    <th>
        
LAS VEGAS, NV
        </th>
    <th>JIGGY LUBE LIVE</th>
    <th><button style={{backgroundColor:"green",marginLeft:"50px"}} type="submit">Buy tickets</button></th>
  </tr>
  <br></br>
  <tr>
  <th>august7</th>
    <th>
   CONCORD, </th>
    <th>
CONCORD PAVILION</th>
    <th><button type="submit" style={{backgroundColor:"green",marginLeft:"50px"}}>Buy tickets</button></th>
  </tr>
  <br></br>
  

</table>


            <footer
        style={{
          backgroundColor: "skyblue",
          marginTop: "150px",
          height: "200px",
          textAlign: "center",
          color: "white", 
        }}
      >
        <h1 style={{ fontSize: "100px" ,fontWeight:"bolder" }}>
          The Generics 
         
        </h1>
      </footer>


        </div>

    );
}
export default Homepage;