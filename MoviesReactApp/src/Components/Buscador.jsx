import { useState } from "react";

export const Buscador = ({movies, setMovies}) => {

  const [search, setSearch] = useState('');
  const [notFound, setNotFound] = useState(false);

  const searchMovie = (e) => {

    let target = e.target.value;

    setSearch(target);

    let filteredMovies = movies.filter((movie) => {
      return movie.title.toLowerCase().includes(target.toLocaleLowerCase()) 
    });

    if(target.length <= 1 || filteredMovies <= 0){
      filteredMovies = JSON.parse(localStorage.getItem('movies'));
      setNotFound(true);
    }else{
      setNotFound(false);
    }

    console.log(filteredMovies);
    setMovies(filteredMovies);
  }


  return (
    <div className="search">
        <h3 className="title">Buscador: {search}</h3>
        <span>{notFound && 'No se encontraron resultados'}</span>
        <input type="text" 
        placeholder="Buscar..." 
        name="search"
        autoComplete="off"
        onChange={searchMovie}
        />
        <button id="search">Buscar</button>
    </div>
  )
}
