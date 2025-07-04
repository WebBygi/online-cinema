import Link from 'next/link'
import styles from './Footer.module.scss'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.links}>
            <Link href="/">Home</Link>
            <Link href="/info">Info</Link>
            <Link href="/support">Support</Link>
            <Link href="/contact">Contact us</Link>
          </div>
          <div className={styles.copyright}>
            © {new Date().getFullYear()} PlayOn. All rights reserved
          </div>
        </div>
      </div>
    </footer>
  )
} 