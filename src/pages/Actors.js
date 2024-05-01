import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Actors() {
  const [actors, setActors] = useState([])
  

  useEffect(() =>{
    fetch("http://localhost:4000/actors")
    .then(r => r.json())
    .then(data => setActors(data))
    .catch(error => console.error(error));
  }, []);
  const eachActor = actors.map(actor => (
    <article key={actor.id}>
      <h2>{actor.name}</h2>
      <ul>
        {actor.movies.map((film) => (
          <li key={film}>{film}</li>
        ))}
      </ul>
    </article>
  ))
  
  return (
    <>
      <header>
        {/* What component should go here? */}
        <NavBar />
      </header>
      <main>
        {/* Actor info here! */}
        <h1>Actors Page</h1>
        {eachActor}
      </main>
    </>
  );
};

export default Actors;
