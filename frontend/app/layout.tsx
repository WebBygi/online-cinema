import { Providers } from '@/store/provider'
import { Outfit } from 'next/font/google'
import '@/styles/globals.scss'
import { Header } from '@/components/layout/Header/Header'
import Footer from '@/components/layout/Footer/Footer'

const outfit = Outfit({ subsets: ['latin'] })

export const metadata = {
  title: 'Online Cinema',
  description: 'Watch movies online',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
} 