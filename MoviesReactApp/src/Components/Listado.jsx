
export const Listado = () => {
    //const peliculas = [T
    return (
        [1, 2, 3, 4, 5].map((n) => (
            <div key={n} className="pelicula">
                <img src={`https://via.placeholder.com/200x300?text=Película ${n}`} alt={`Película ${n}`} />
            </div>
        ))
    )
}
