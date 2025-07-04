import axios from 'axios'
import Cookies from 'js-cookie'
import { IUser } from '@/interfaces/user.interface'

const API_URL = `${process.env.API_URL}/auth`

export const AuthService = {
  async login(email: string, password: string) {
    const response = await axios.post<{ user: IUser; accessToken: string }>(
      `${API_URL}/login`,
      { email, password }
    )

    if (response.data.accessToken) {
      Cookies.set('accessToken', response.data.accessToken)
    }

    return response.data.user
  },

  async register(email: string, password: string) {
    const response = await axios.post<{ user: IUser; accessToken: string }>(
      `${API_URL}/register`,
      { email, password }
    )

    if (response.data.accessToken) {
      Cookies.set('accessToken', response.data.accessToken)
    }

    return response.data.user
  },

  async getProfile() {
    const response = await axios.get<IUser>(`${API_URL}/profile`)
    return response.data
  },

  logout() {
    Cookies.remove('accessToken')
  },

  async updateProfile(data: Partial<IUser>) {
    return axios.put<IUser>(`${API_URL}/profile`, data)
  },
} 