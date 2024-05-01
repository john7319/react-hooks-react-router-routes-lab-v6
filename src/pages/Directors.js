import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Directors() {
  const [directors, setDirector] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/directors")
      .then((r) => r.json())
      .then((data) => setDirector(data))
      .catch((error) => console.error(error));
  }, []);
  const eachDirector = directors.map((director) => (
    <article key={director.id}>
      <h2>{director.name}</h2>
      <ul>
        {director.movies.map((film) => (
        <li key= {film}>{film}</li>
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
        {/* Director info here! */}
        <h1> Directors Page </h1>
        {eachDirector}
      </main>
    </>
  );
}

export default Directors;
