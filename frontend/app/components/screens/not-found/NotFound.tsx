import { FC } from 'react'
import { Heading } from '@/components/ui/heading/Heading'
import styles from './NotFound.module.scss'
import Link from 'next/link'

export const NotFound: FC = () => {
  return (
    <div className={styles.notFound}>
      <Heading title="404 - Page Not Found" />
      <p>The page you are looking for does not exist</p>
      <Link href="/" className={styles.link}>
        Go Home
      </Link>
    </div>
  )
} 