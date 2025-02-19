
export const Editar = ({ movie, getMovies, setMovies, setEdit }) => {

    const title_component = "Edit movie";

    const saveEdit = (e, id) => {
        e.preventDefault();

        let target = e.target;

        const savedMovies = getMovies();
        const index = savedMovies.findIndex((item) => item.id === id);

        let editedMovie = {
            id,
            title: target.title.value,
            description: target.description.value
        }

        console.log(editedMovie);
        
        savedMovies[index] = editedMovie;

        localStorage.setItem('movies', JSON.stringify(savedMovies));

        setMovies(savedMovies);
        setEdit(0);

    }

    return (
        <div className="edit-form">
            <h3 className="title">{title_component}: {movie.title}</h3>

            <form onSubmit={ e => {saveEdit(e, movie.id)} }>
                <input type="text"
                    name="title"
                    className="edited-title"
                    defaultValue={movie.title} />
                <textarea name="description"
                    className="edited-description"
                    defaultValue={movie.description}></textarea>
                <input type="submit" className="edit" value="Update" />
            </form>
        </div>
    )
}
