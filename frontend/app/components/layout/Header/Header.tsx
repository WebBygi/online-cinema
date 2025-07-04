'use client'
import { FC } from 'react'
import styles from './Header.module.scss'
import Link from 'next/link'
import { useAuth } from '@/hooks/useAuth'

export const Header: FC = () => {
  const { user } = useAuth()

  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        Online Cinema
      </Link>

      <nav className={styles.navigation}>
        <Link href="/movies">Movies</Link>
        {user ? (
          <>
            <Link href="/profile">Profile</Link>
          </>
        ) : (
          <Link href="/auth">Login</Link>
        )}
      </nav>
    </header>
  )
} 