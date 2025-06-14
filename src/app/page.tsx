import { PostsList } from '@/components/PostsList';
import { SpinLoader } from '@/components/SpinLoader';
import { Suspense } from 'react';

export default async function HomePage() {

  return (
    <div>
      <header className='text-6xl font-bold text-center py-8'>
        <h1>Header</h1>
      </header>

      <Suspense fallback={<SpinLoader />}>
      <PostsList></PostsList>
      </Suspense>

      <footer className='text-6xl font-bold text-center py-8'>
        <p>Footer</p>
      </footer>
    </div>
  );
}
