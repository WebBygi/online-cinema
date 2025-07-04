import { FC } from 'react'
import { IActor } from '@/interfaces/actor.interface'

interface ActorProps {
  actor: IActor
}

const Actor: FC<ActorProps> = ({ actor }) => (
  <div>
    <img src={actor.photo} alt={actor.name} style={{ maxWidth: 200, borderRadius: '50%' }} />
    <h1>{actor.name}</h1>
    <p><b>Возраст:</b> {actor.age}</p>
    <p><b>Профессия:</b> {actor.profession.join(', ')}</p>
    <p><b>Биография:</b> {actor.description}</p>
    <h3>Факты:</h3>
    <ul>
      {actor.facts.map((fact, i) => <li key={i}>{fact}</li>)}
    </ul>
    <h3>Награды:</h3>
    <ul>
      {actor.awards.map((a, i) => (
        <li key={i}>{a.award_title} ({a.award_year}) — {a.movie_name} — {a.nomination_title} {a.winning ? '🏆' : ''}</li>
      ))}
    </ul>
    {/* Можно добавить список фильмов, если есть связь */}
  </div>
)

export default Actor 