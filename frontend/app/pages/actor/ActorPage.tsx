import { ActorService } from '@/services/actor.service'
import Actor from '@/components/screens/actor/Actor'
import Meta from '@/components/seo/Meta'
import { notFound } from 'next/navigation'

interface ActorPageProps {
  params: {
    slug: string
  }
}

export default async function ActorPage({ params }: ActorPageProps) {
  const actor = await ActorService.getBySlug(params.slug);

  if (!actor) {
    notFound();
  }

  return (
    <>
      <Meta title={actor.name} description={`${actor.name} - Actor profile`} />
      <Actor actor={actor} />
    </>
  );
} 