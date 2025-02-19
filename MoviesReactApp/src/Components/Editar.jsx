export const Editar = ({movie}) => {

    const title_component = "Edit movie";

    return (
        <div className="edit-form">
            <h3 className="title">{title_component}: {movie.title}</h3>

            <form>
                <input type="text"
                    name="title"
                    className="edited-title"
                    defaultValue={movie.title} />
                <textarea name="description"
                    className="edited-description"
                    defaultValue={movie.description}></textarea>
                <input type="submit" className="edit" value="update" />
            </form>
        </div>
    )
}
