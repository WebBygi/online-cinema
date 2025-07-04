import { FC } from 'react'
import { IMovie } from '@/interfaces/movie.interface'
import styles from './Movies.module.scss'
import MovieList from '@/components/ui/movie-list/MovieList'
import Heading from '@/components/ui/heading/Heading'

interface IMoviesProps {
  movies: IMovie[]
}

export const Movies: FC<IMoviesProps> = ({ movies }) => {
  return (
    <div className={styles.movies}>
      <Heading title="Movies catalog" />
      <MovieList movies={movies} />
    </div>
  )
} 