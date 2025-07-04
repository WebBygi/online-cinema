"use client"

import { FC, useState } from 'react'
import styles from './Auth.module.scss'
import { useAuth } from '@/hooks/useAuth'
import Heading from '@/components/ui/heading/Heading'

export const Auth: FC = () => {
  const { login, register } = useAuth()
  const [isLogin, setIsLogin] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (isLogin) {
      login(email, password)
    } else {
      register(email, password)
    }
  }

  return (
    <div className={styles.auth}>
      <Heading title={isLogin ? "Login" : "Register"} />
      
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">
          {isLogin ? "Login" : "Register"}
        </button>
      </form>

      <button 
        className={styles.switch}
        onClick={() => setIsLogin(!isLogin)}
      >
        {isLogin ? "Register" : "Login"}
      </button>
    </div>
  )
}

export default Auth; 