import { Metadata } from 'next'

export const getMetadata = (title: string, description?: string): Metadata => {
  const siteName = 'PlayOn - Online Cinema'
  
  return {
    title: `${title} | ${siteName}`,
    description: description || 'Watch movies and TV series online in HD quality',
    openGraph: {
      title: `${title} | ${siteName}`,
      description: description || 'Watch movies and TV series online in HD quality',
      siteName,
      locale: 'en_US',
      type: 'website',
    },
  }
} 