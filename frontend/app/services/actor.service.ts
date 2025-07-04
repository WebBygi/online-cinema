import { IActor } from '@/interfaces/actor.interface'
import { actors } from '@/mock/actors.data'

export const ActorService = {
  async getAll(searchTerm?: string) {
    if (searchTerm) {
      const searchTermLower = searchTerm.toLowerCase()
      return actors.filter(actor => 
        actor.name.toLowerCase().includes(searchTermLower) ||
        actor.en_name.toLowerCase().includes(searchTermLower)
      )
    }
    return actors
  },

  async getBySlug(slug: string) {
    return actors.find(actor => actor.slug === slug)
  },

  async getById(_id: string) {
    return actors.find(actor => actor._id === _id)
  },

  async create() {
    throw new Error('Not implemented in mock data')
  },

  async update() {
    throw new Error('Not implemented in mock data')
  },

  async delete() {
    throw new Error('Not implemented in mock data')
  }
}

export async function getActor(slug: string): Promise<IActor | undefined> {
  // В реальном приложении здесь был бы API запрос
  return actors.find(actor => actor.slug === slug)
} 