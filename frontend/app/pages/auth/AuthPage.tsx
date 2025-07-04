"use client"

import { Auth } from '@/components/screens/auth/Auth'
import Meta from '@/components/seo/Meta'
import { redirect } from 'next/navigation'
import { useAuth } from '@/hooks/useAuth'

export default function AuthPage() {
  const { user } = useAuth()

  if (user) {
    redirect('/profile')
  }

  return (
    <>
      <Meta title="Auth" description="Login or register" />
      <Auth />
    </>
  )
} 