'use client'

import { Metadata } from 'next'
import { IMeta } from './meta.interface'

export default function Meta({ title, description }: IMeta) {
  return (
    <>
      <title>{title}</title>
      {description ? (
        <meta name="description" content={description} />
      ) : (
        <meta name="robots" content="noindex, nofollow" />
      )}
    </>
  )
} 