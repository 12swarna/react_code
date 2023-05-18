
import './App.css';
import Movielist from './Component1/Movielist';
import { Fragment ,useState} from 'react';

function App() {
  const[movies,setmovies]=useState([]);
  const[isloading,setisloading]=useState(false);

 async function fetchHandler(){
  
  setisloading(true);
  const response= await  fetch("https://swapi.dev/api/films");
   const data=await response.json();
    
       
      const transormData=data.results.map((moviedata)=>{
        return{

          id: moviedata.episode_id,
          title: moviedata.title,
          openingText: moviedata.opening_crawl,
          releaseDate: moviedata.release_date

        }
      });
      setmovies(transormData);
      setisloading(false);
  
    
  }
  


  


  return (
    <Fragment>
      <section>
        <button onClick={fetchHandler} >Fetch movies</button>
      </section>
      <section>
       {!isloading &&  movies.length > 0 &&  <Movielist movies={movies} ></Movielist>}
       {!isloading && movies.length ===0  && <h1>content not found</h1>}
       {isloading && <h1>loading....</h1>}
        
      </section>

    
    </Fragment>
  );
}

export default App;
