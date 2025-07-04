'use client'

import { IMovie } from '@/interfaces/movie.interface'
import MovieCard from './MovieCard'
import styles from './MovieList.module.scss'

export interface IMovieList {
  title?: string
  movies: IMovie[]
}

const MovieList = ({ title, movies }: IMovieList) => {
  return (
    <div className={styles.list}>
      {title && <h2 className={styles.heading}>{title}</h2>}
      <div className={styles.movies}>
        {movies.map(movie => (
          <MovieCard key={movie._id} movie={movie} />
        ))}
      </div>
    </div>
  )
}

export default MovieList 