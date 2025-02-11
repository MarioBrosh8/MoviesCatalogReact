import { useEffect } from "react";
import { useState } from "react";

export const Listado = () => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        console.log("Se han cargado las peliculas");
        getMovies();

    }, []);

    const getMovies = () => {

        let parsedMovies = JSON.parse(localStorage.getItem('movies'));
        console.log(parsedMovies);
        setMovies(parsedMovies);

    };
    return (
        <>
        {movies.map((movie) => {
                return (<div key={movie.id}>
                    <h1>{movie.title}</h1>
                    <p>{movie.description}</p>
                </div>)

            })
        }
        </>
    )
}
