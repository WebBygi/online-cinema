import { MovieService } from '@/services/movie.service'
import Home from '@/components/screens/home/Home'
import Meta from '@/components/seo/Meta'

export default async function HomePage() {
  const movies = await MovieService.getAll()

  return (
    <>
      <Meta title="Watch movies online" description="Watch your favorite movies online" />
      <Home movies={movies} />
    </>
  )
} 