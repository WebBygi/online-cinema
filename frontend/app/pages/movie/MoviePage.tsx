import { MovieService } from '@/services/movie.service'
import Movie from '@/components/screens/movie/Movie'
import Meta from '@/components/seo/Meta'
import { notFound } from 'next/navigation'

interface MoviePageProps {
  params: {
    slug: string
  }
}

export default async function MoviePage({ params }: MoviePageProps) {
  const slug = typeof params.slug === 'string' ? params.slug : params.slug?.[0];
  const { data: movie } = await MovieService.getBySlug(slug);

  if (!movie) {
    notFound();
  }

  return (
    <>
      <Meta title={movie?.title || ''} description={movie?.description || ''} />
      <Movie movie={movie} />
    </>
  );
} 