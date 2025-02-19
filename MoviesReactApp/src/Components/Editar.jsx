export const Editar = () => {
    const title_component = "Edit movie";
    return (
        <div className="edit-form">
            <h3 className="title">{title_component}</h3>

            <form>
                <input type="text"
                    name="title"
                    className="edited-title"
                    defaultValue="original movie title" />
                <textarea name="description"
                    className="edited-description"
                    defaultValue="original movie description"></textarea>
                <input type="submit" className="edit" value="update" />
            </form>
        </div>
    )
}
