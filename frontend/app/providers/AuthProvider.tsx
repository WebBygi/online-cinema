'use client'

import { FC, PropsWithChildren, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { AuthService } from '@/services/auth.service'
import { setAuth } from '@/store/store'
import Cookies from 'js-cookie'

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    const accessToken = Cookies.get('accessToken')
    if (accessToken) {
      AuthService.getProfile()
        .then(user => {
          dispatch(setAuth(user))
        })
        .catch(() => {
          AuthService.logout()
        })
    }
  }, [dispatch])

  return <>{children}</>
} 