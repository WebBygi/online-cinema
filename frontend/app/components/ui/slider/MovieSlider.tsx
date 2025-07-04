'use client'

import { IMovie } from '@/interfaces/movie.interface'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import styles from './MovieSlider.module.scss'

export default function MovieSlider({ movies = [] }: { movies?: IMovie[] }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === movies.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? movies.length - 1 : prevIndex - 1
    )
  }

  if (!movies.length) return null

  const movie = movies[currentIndex]

  return (
    <div className={styles.slider}>
      <div className={styles.slide}>
        {movie.big_poster && (
          <Image
            src={movie.big_poster}
            alt={movie.title}
            fill
            className="object-cover"
            priority
          />
        )}
        <div className={styles.content}>
          <h2 className={styles.title}>{movie.title}</h2>
          <p className={styles.description}>{movie.description}</p>
          <Link href={`/movie/${movie.slug}`} className={styles.button}>
            Watch Now
          </Link>
        </div>
      </div>
      <button className={`${styles.arrow} ${styles.prev}`} onClick={prevSlide}>
        ←
      </button>
      <button className={`${styles.arrow} ${styles.next}`} onClick={nextSlide}>
        →
      </button>
    </div>
  )
} 