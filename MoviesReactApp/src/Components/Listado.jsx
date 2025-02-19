import { useEffect } from "react";
import { Editar } from "./Editar";
import { useState } from "react";

export const Listado = ({ movies, setMovies }) => {

    //const [movies, setMovies] = useState([]);
    const [edit, setEdit] = useState(0);

    useEffect(() => {
        getMovies();

    }, []);

    const getMovies = () => {

        let parsedMovies = JSON.parse(localStorage.getItem('movies'));
        setMovies(parsedMovies);

        return parsedMovies;

    };


    const deleteMovie = (id) => {
        let movies = JSON.parse(localStorage.getItem('movies'));
        let filteredMovies = movies.filter((movie) => movie.id !== parseInt(id));
        setMovies(filteredMovies);
        localStorage.setItem('movies', JSON.stringify(filteredMovies));
    }

    return (
        <>

            {movies != null ? movies.map((movie) => {
                return (<article key={movies.id} className="fila-peliculas">
                    <div key={movie.id} className="pelicula ">
                        <h1>{movie.title}</h1>
                        <p>{movie.description}</p>

                        <button className="edit" onClick={() => { setEdit(movie.id) }}>Edit</button>
                        <button>Reset</button>
                        <button className="delete" onClick={() => deleteMovie(movie.id)}>Delete</button>

                        {edit === movie.id && (
                            <Editar movie={movie} getMovies={getMovies} setMovies={setMovies} setEdit={setEdit}></Editar>
                        )
                        }

                    </div>

                </article>)
            })
                : <h2>No hay peliculas para mostrar</h2>
            }

        </>
    )
}
