import { IGenre } from './genre.interface'
import { IActor } from './actor.interface'
import { ICollection } from './collection.interface'

export interface IParameters {
  year: number
  duration: number
  country: string
  age: string
}

export interface IMovie {
  _id: string
  kinopoisk_id: string
  tmdb_id: string
  title: string
  description: string
  short_description: string
  slogan: string
  poster: string
  big_poster: string
  video_url: string
  trailer: string
  quality: string
  movie_type: string
  slug: string
  is_series: boolean
  rating_kp: number
  votes: number
  rating: number
  count_opened: number
  is_send_telegram: boolean
  updated_at: string
  genres: IGenre[]
  actors: IActor[]
  collections: ICollection[]
  views: number
  parameters: IParameters
  videos: {
    _id: string
    url: string
    name: string
  }[]
  reviews: {
    _id: string
    user: {
      _id: string
      name: string
    }
    text: string
    rating: number
    createdAt: string
  }[]
  similar: {
    _id: string
    title: string
    poster: string
    slug: string
  }[]
  favorites: string[]
  isSendTelegram: boolean
  createdAt: string
  updatedAt: string
} 