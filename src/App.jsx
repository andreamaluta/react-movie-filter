import { useState } from 'react'


function App() {

  const initialFilm = [
    { title: 'Inception', genre: 'Fantascienza' },
    { title: 'Il Padrino', genre: 'Thriller' },
    { title: 'Titanic', genre: 'Romantico' },
    { title: 'Batman', genre: 'Azione' },
    { title: 'Interstellar', genre: 'Fantascienza' },
    { title: 'Pulp Fiction', genre: 'Thriller' },
  ]

  const [films, setFilms] = useState(initialFilm);

  return (
    <>
      <div className="container">
        <h1 className='mb-4'>Film Filter</h1>

        <select className="form-select mb-4">
          <option value="">Seleziona un genere</option>
          <option value="Fantascienza">Fantascienza</option>
          <option value="Thriller">Thriller</option>
          <option value="Romantico">Romantico</option>
          <option value="Azione">Azione</option>
        </select>

        <ul className="list-group">
          {films.map((film, index) => (
            <li key={index} className='list-group-item'>
              {film.title}
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
