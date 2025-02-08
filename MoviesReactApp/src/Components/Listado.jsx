export const Listado = () => {
    const peliculas = [1, 2, 3, 4, 5];

    function resolveAfter2Seconds() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve('resolved');
        }, 2000);
      });
    }

      async function asyncCall() {
          console.log('calling');
          const result = await resolveAfter2Seconds();
          console.log(result);
      }
      

        return (
        peliculas.map((n) => (
            <div key={n} className="pelicula">
                <img src={`https://via.placeholder.com/200x300?text=Película ${n}`} alt={`Película ${n}`} />
                <p>{n}</p>
            </div>
        ))
    )
}
