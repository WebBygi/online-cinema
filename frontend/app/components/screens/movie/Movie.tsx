import { FC } from 'react'
import { IMovie } from '@/interfaces/movie.interface'
import Link from 'next/link'

interface MovieProps {
  movie: IMovie
}

const Movie: FC<MovieProps> = ({ movie }) => (
  <div>
    {movie.poster && <img src={movie.poster} alt={movie.title} style={{ maxWidth: 300 }} />}
    <h1>{movie.title}</h1>
    {movie.slogan && <p><b>Слоган:</b> {movie.slogan}</p>}
    <p><b>Описание:</b> {movie.description}</p>
    <p><b>Жанры:</b> {movie.genres?.map(g => g.name).join(', ')}</p>
    <p><b>Год:</b> {movie.parameters?.year} | <b>Страна:</b> {movie.parameters?.country} | <b>Длительность:</b> {movie.parameters?.duration} мин</p>
    <p><b>Рейтинг:</b> {movie.rating} / 10</p>
    <h2>Актёры:</h2>
    <ul>
      {movie.actors?.map(actor => (
        <li key={actor._id}>
          <Link href={`/actor/${actor.slug}`}>
            {actor.photo && <img src={actor.photo} alt={actor.name} style={{ width: 50, borderRadius: '50%', marginRight: 8 }} />}
            {actor.name}
          </Link>
        </li>
      ))}
    </ul>
    {movie.trailer && (
      <div>
        <h3>Трейлер</h3>
        <iframe width="560" height="315" src={movie.trailer.replace('watch?v=', 'embed/')} frameBorder="0" allowFullScreen></iframe>
      </div>
    )}
    <h3>Отзывы:</h3>
    <ul>
      {movie.reviews?.map(r => (
        <li key={r._id}><b>{r.user.name}:</b> {r.text} ({r.rating}/5)</li>
      ))}
    </ul>
    <h3>Похожие фильмы:</h3>
    <ul>
      {movie.similar?.map(s => (
        <li key={s._id}>
          <Link href={`/movie/${s.slug}`}>{s.title}</Link>
        </li>
      ))}
    </ul>
  </div>
)

export default Movie 