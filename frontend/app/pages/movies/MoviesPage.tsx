import { MovieService } from '@/services/movie.service'
import { Movies } from '@/components/screens/movies/Movies'
import Meta from '@/components/seo/Meta'

export default async function MoviesPage() {
  const movies = await MovieService.getAll()

  return (
    <>
      <Meta title="Movies catalog" description="Browse our movies collection" />
      <Movies movies={movies} />
    </>
  )
} 