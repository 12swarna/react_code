
import './App.css';
import Movielist from './Component1/Movielist';
import { Fragment ,useState} from 'react';

function App() {
  const[movies,setmovies]=useState([]);
  const[isloading,setisloading]=useState(false);
  const[error,seterror]=useState(null)

 async function fetchHandler(){
  
  setisloading(true);
  seterror(null);

 try{
  const response= await  fetch("https://swapi.dev/api/films/");

  if(!response.ok){
    throw new Error("something went wrong");
   }

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
      
      
    }catch(error){
      seterror(error.message);

    }
    setisloading(false);
    
  }

  let content=<p>found no movies...</p>

  if(movies.length > 0){
    content =<Movielist movies={movies} ></Movielist>
  }


  if(error){
    content=<h1>{error}</h1>

  }


   if(isloading){
    content=<h1>loading...</h1>
   }
  


  


  return (
    <Fragment>
      <section>
        <button onClick={fetchHandler} >Fetch movies</button>
      </section>
      <section>
       {content}
        
      </section>

    
    </Fragment>
  );
}

export default App;
