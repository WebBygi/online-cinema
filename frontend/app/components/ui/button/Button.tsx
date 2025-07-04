'use client'

import { ButtonHTMLAttributes } from 'react'
import cn from 'classnames'
import styles from './Button.module.scss'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outlined'
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
}

export default function Button({
  children,
  className,
  variant = 'primary',
  size = 'md',
  fullWidth,
  ...rest
}: IButton) {
  return (
    <button
      className={cn(styles.button, styles[variant], styles[size], {
        [styles.fullWidth]: fullWidth,
      }, className)}
      {...rest}
    >
      {children}
    </button>
  )
} 