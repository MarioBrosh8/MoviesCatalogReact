import "./App.css"
import { Buscador } from "./Components/Buscador"
import { Crear } from "./Components/Crear"
import { Listado } from "./Components/Listado"
import { useState } from "react"

function App() {

  const [movies, setMovies] = useState([]);

  return (
    <div className="App">
      <header>
        <nav>
          <div className="logo">BroshFlix</div>
          <ul>
            <li>
              <a href="#inicio">Inicio</a>
            </li>
            <li>
              <a href="#series">Series</a>
            </li>
            <li>
              <a href="#peliculas">Películas</a>
            </li>
            <li>
              <a href="#novedades">Novedades</a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="hero">
          <h1>Bienvenido a CatálogoFlix</h1>
          <p>Descubre las mejores películas y series</p>
        </section>

        <section className="buscador">
          <Buscador></Buscador>
        </section>

        <h2>Tendencias</h2>
        <section className="categoria">
          
          <div className="fila-peliculas">
            <Listado movies={movies} setMovies={setMovies} />
          </div>
        </section>

        <h2>Populares en CatálogoFlix</h2>
        <section className="categoria">
          
          <div className="fila-peliculas">
            {[6, 7, 8, 9, 10].map((n) => (
              <div key={n} className="pelicula">
                <img src={`https://via.placeholder.com/200x300?text=Película ${n}`} alt={`Película ${n}`} />
              </div>
            ))}
          </div>
        </section>

        <section className="Crear">
          <Crear setMovies={setMovies} />   
        </section>
      </main>

      <footer>
        <p>&copy; 2025 CatálogoFlix. Todos los derechos reservados.</p>
      </footer>
    </div>
  )
}

export default App

