import { FC } from 'react'
import { IUser } from '@/interfaces/user.interface'
import styles from './Profile.module.scss'
import { Heading } from '@/components/ui/heading/Heading'

interface IProfileProps {
  user: IUser
}

export const Profile: FC<IProfileProps> = ({ user }) => {
  return (
    <div className={styles.profile}>
      <Heading title="Profile" />
      <div className={styles.profileInfo}>
        <div className={styles.item}>
          <span>Email:</span>
          <span>{user.email}</span>
        </div>
        {user.isAdmin && (
          <div className={styles.item}>
            <span>Admin status:</span>
            <span>Yes</span>
          </div>
        )}
      </div>
    </div>
  )
} 