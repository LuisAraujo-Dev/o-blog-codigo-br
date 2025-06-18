import { Container } from '@/components/Container';
import { Header } from '@/components/Header';
import { PostHeading } from '@/components/PostHeading';
import { PostsList } from '@/components/PostsList';
import { SpinLoader } from '@/components/SpinLoader';
import clsx from 'clsx';
import { Suspense } from 'react';

export default async function HomePage() {
  return (
    <Container>
      <Header />

      <section
        className={clsx(
          'grid grid-cols-1 gap-8 mb-16',
          'sm:grid-cols-2',
          'group',
        )}
      >

        <div className='flex flex-col gap-4 sm:justify-center'>
          <time
            className='text-slate-600 block text-sm/tight'
            dateTime='2025-04-20'
          >
            20/04/2025 10:00
          </time>
          <PostHeading as={'h2'} url={''}>
            Título do Post
          </PostHeading>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae,
            eaque! Nulla, illum iusto. Eum incidunt voluptas alias aperiam
            ratione velit consectetur voluptatum, excepturi laboriosam
            necessitatibus voluptatem voluptatibus. Nostrum, tempore eligendi.
          </p>
        </div>
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
