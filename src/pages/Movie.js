import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";

function Movie() {
  const [movie, setmovie] = useState({});
  const params = useParams();
  const movieId = params.id;

  useEffect(() =>{
    fetch(`http://localhost:4000/movies/${movieId} `)
    .then(r => r.json())
    .then(data => setmovie(data))
    .catch(error => console.error(error));
  }, [movieId]);

  if(!movie.title){
    return <h1>Loading...</h1>;
  };
  const movieGenres = movie.genres.map((genre) =>(
    <span key={genre}>{genre}</span>
  ))
  return (
    <>
      <header>
        {/* What component should go here? */}
        <NavBar/>
      </header>
      <main>
        {/* Movie info here! */}
        <h1>{movie.title}</h1>
        <p>{movie.time}</p>
        {movieGenres}
        
      </main>
    </>
  );
};

export default Movie;
