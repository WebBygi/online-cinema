'use client'

import { FC } from 'react'
import { IMovie } from '@/interfaces/movie.interface'
import styles from './MovieCard.module.scss'
import Link from 'next/link'
import Image from 'next/image'

interface IMovieCard {
  movie: IMovie
}

export const MovieCard: FC<IMovieCard> = ({ movie }) => {
  return (
    <Link href={`/movie/${movie.slug}`} className={styles.card}>
      <Image
        src={movie.poster || '/no-poster.png'}
        alt={movie.title}
        width={220}
        height={330}
        priority
      />
      <h3>{movie.title}</h3>
    </Link>
  )
}

export default MovieCard 