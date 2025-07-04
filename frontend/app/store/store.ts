import { configureStore } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import { IUser } from '@/interfaces/user.interface'

interface AuthState {
  user: IUser | null
  isAuth: boolean
}

const initialState: AuthState = {
  user: null,
  isAuth: false
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, { payload }: { payload: IUser }) => {
      state.user = payload
      state.isAuth = true
    },
    logout: (state) => {
      state.user = null
      state.isAuth = false
    }
  }
})

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer
  }
})

export const { setAuth, logout } = authSlice.actions

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch 