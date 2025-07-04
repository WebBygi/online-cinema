export interface IActor {
  _id: string
  kinopoisk_id: string
  name: string
  en_name: string
  photo: string
  slug: string
  sex: string
  growth: number
  birthday: string
  death: string | null
  age: number
  birth_place: string[]
  death_place: string[]
  count_awards: number
  profession: string[]
  facts: string[]
  awards: {
    movie_id: string
    movie_name: string
    award_title: string
    award_year: number
    nomination_title: string
    winning: boolean
  }[]
  movies_count: number
  description: string
  createdAt: string
  updatedAt: string
} 