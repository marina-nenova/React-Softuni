import { useState } from "react";
import "./App.css";
import MovieList from "./components/MovieList";
import movies from "./assets/movies";
import Timer from "./components/Timer";
import Counter from "./components/Counter";

function App() {
  return (
    <>
    <Timer startTime={5} />
    <Counter />
      <h1>My First Dynamic React Application</h1>
      <MovieList movies={movies} headingText="Movie List" />
    </>
  );
}

export default App;
