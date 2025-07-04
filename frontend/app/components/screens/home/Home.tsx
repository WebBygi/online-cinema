'use client'

import styles from './Home.module.scss'
import MovieSlider from '@/components/ui/slider/MovieSlider'
import MovieList from '@/components/ui/movie-list/MovieList'
import Heading from '@/components/ui/heading/Heading'

export default function Home() {
  return (
    <div className={styles.home}>
      <MovieSlider />
      <div className="container">
        <div className={styles.content}>
          <section>
            <Heading title="Continue watching" />
            <MovieList movies={[]} /> {/* Здесь будут фильмы из Redux */}
          </section>

          <section>
            <Heading title="Movies" />
            <MovieList movies={[]} />
          </section>

          <section>
            <Heading title="Series" />
            <MovieList movies={[]} />
          </section>

          <section>
            <Heading title="Cartoons" />
            <MovieList movies={[]} />
          </section>
        </div>
      </div>
    </div>
  )
} 