import { IMovie } from '@/interfaces/movie.interface'
import { movies } from '@/mock/movies.data'

export const MovieService = {
  async getAll(searchTerm?: string) {
    if (searchTerm) {
      const searchTermLower = searchTerm.toLowerCase()
      return movies.filter(movie => 
        movie.title.toLowerCase().includes(searchTermLower) ||
        movie.description.toLowerCase().includes(searchTermLower)
      )
    }
    return movies
  },

  async getMostPopular() {
    return movies.sort((a, b) => b.views - a.views).slice(0, 4)
  },

  async getBySlug(slug: string) {
    const movie = movies.find(movie => movie.slug === slug)
    return {
      data: movie || null
    }
  },

  async getById(_id: string) {
    const movie = movies.find(movie => movie._id === _id)
    return {
      data: movie || null
    }
  },

  async getByActor(actorId: string) {
    return {
      data: movies.filter(movie => movie.actors.some(actor => actor._id === actorId))
    }
  },

  async getByGenres(genreIds: string[]) {
    return {
      data: movies.filter(movie =>
        movie.genres.some(genre => genreIds.includes(genre._id))
      )
    }
  },

  async getByCollection(collectionSlug: string) {
    return movies.filter(movie => movie.collections.some(col => col.slug === collectionSlug))
  },

  async create() {
    throw new Error('Not implemented in mock data')
  },

  async update() {
    throw new Error('Not implemented in mock data')
  },

  async delete() {
    throw new Error('Not implemented in mock data')
  },

  async updateCountOpened(slug: string) {
    const movie = movies.find(m => m.slug === slug)
    if (movie) {
      movie.count_opened += 1
    }
    return movie
  }
}

export const getMovie = async (slug: string): Promise<IMovie | null> => {
  const { data } = await MovieService.getBySlug(slug)
  return data
}

export const getMovieById = async (_id: string): Promise<IMovie | null> => {
  const { data } = await MovieService.getById(_id)
  return data
}

export async function getMovies(): Promise<IMovie[]> {
  // В реальном приложении здесь был бы API запрос
  return movies
} 