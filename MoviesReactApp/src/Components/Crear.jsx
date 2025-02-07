import { useState } from "react";

export const Crear = () => {


    const title = "Placeholder title";
    const [movieItem, setMovie] = useState({});

    const getFormValues = (e) => {
        e.preventDefault();

        const target = e.target;
        const title = target.title.value;
        const description = target.description.value;  


        let movie = {
            ...movieItem,
            id: new Date().getTime(),
            title,
            description
        }

        setMovie(movie);

        console.log(movie);

    };

    //[title, setTitle] = useState("Placeholder title");

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
