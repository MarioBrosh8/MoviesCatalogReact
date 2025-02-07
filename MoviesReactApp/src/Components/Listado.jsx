export const Listado = () => {
    const peliculas = [1, 2, 3, 4, 5];

    return (
        

        peliculas.map((n) => (
            <div key={n} className="pelicula">
                <img src={`https://via.placeholder.com/200x300?text=Película ${n}`} alt={`Película ${n}`} />
                <p>{n}</p>
            </div>
        ))
    )
}
