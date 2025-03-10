import { useState } from "react";
import { saveinLocalStorage } from "../helpers/saveinStorage.jsx";

export const Crear = ({ setMovies }) => {


    const title = "Placeholder title";
    const [movieItem, setMovie] = useState({});

    const getFormValues = (e) => {
        e.preventDefault();

        const target = e.target;
        const title = target.title.value;
        const description = target.description.value;


        let movie = {
            id: new Date().getTime(),
            title,
            description
        }

        setMovie(movie);

        setMovies(items => {
            return [
                ...items,
                movie
            ]
        });

        // helper function to save in local storage, it receives the key and the element to save. This function is imported at the beginning of the file.
        saveinLocalStorage("movies", movie);

    };

    return (
        <div>
            <h3 className="title">{title}</h3>

            {(movieItem.title && movieItem.description) && movieItem.title}

            <form onSubmit={getFormValues}>
                <input
                    type="text"
                    id="title"
                    name="title"
                    placeholder="Titulo" />
                <textarea
                    id="description"
                    name="description"
                    placeholder="Descripción"></textarea>
                <input
                    type="submit"
                    id="save"
                    value="Guardar" />
            </form>
        </div>
    )
}
