import styles from './Heading.module.scss'

interface IHeading {
  title: string
  className?: string
}

export default function Heading({ title, className }: IHeading) {
  return (
    <h2 className={`${styles.heading} ${className || ''}`}>
      {title}
    </h2>
  )
} 