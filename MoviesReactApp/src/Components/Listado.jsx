import { useEffect } from "react";

export const Listado = ({ movies, setMovies }) => {

    //const [movies, setMovies] = useState([]);

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

            {movies != null ? movies.map((movie) => {
                return (<article key={movies.id} className="fila-peliculas">
                    <div key={movie.id} className="pelicula ">
                        <h1>{movie.title}</h1>
                        <p>{movie.description}</p>
                    </div></article>)
            })
                : <h2>No hay peliculas para mostrar</h2>
            }

        </>
    )
}
