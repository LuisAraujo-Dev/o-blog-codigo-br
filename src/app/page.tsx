import { Container } from '@/components/Container';
import { Header } from '@/components/Header';
import { PostCouverImage } from '@/components/PostCouverImage';
import { PostHeading } from '@/components/PostHeading';
import { PostsList } from '@/components/PostsList';
import { SpinLoader } from '@/components/SpinLoader';
import { Suspense } from 'react';

export default async function HomePage() {
  return (
    <Container>
      <Header />

      <section
        className={'grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group'}>
        <PostCouverImage
                      linkProps={{
                        href: '/pos',
                      }}
                      imageProps={{
                        width: 1200,
                        height: 720,
                        src: '/images/bryen_0.png',
                        alt: 'Alt da imagem',
                        priority: true,
                      }}
                    />

                    <div className='flex flex-col gap-4 sm:justify-center'>
                      <time
                        className='text-slate-600 block text-sm/tight'
                        dateTime={'2025-04-20'}
                      >
                        2025-04-20
                      </time></div>
                      <PostHeading as={'h2'} url='#'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </PostHeading>
      </section>

      <Suspense fallback={<SpinLoader />}>
        <PostsList></PostsList>
      </Suspense>

      <footer>
        <p className='text-6xl font-bold text-center py-8'>Footer</p>
      </footer>
    </Container>
  );
}
