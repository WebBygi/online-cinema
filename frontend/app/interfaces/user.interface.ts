export interface IUser {
  _id: string
  email: string
  password: string
  is_admin: boolean
  subscribe: string
  favorites: string[] // массив _id фильмов
  created_at: string
  updated_at: string
} 