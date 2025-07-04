import { Profile } from '@/components/screens/profile/Profile'
import Meta from '@/components/seo/Meta'
import { redirect } from 'next/navigation'
import { useAuth } from '@/hooks/useAuth'

export default function ProfilePage() {
  const { user } = useAuth()

  if (!user) {
    redirect('/auth')
  }

  return (
    <>
      <Meta title="Profile" description="Your profile information" />
      <Profile user={user} />
    </>
  )
} 