import { Container } from '@/components/Container';
import { Header } from '@/components/Header';
import { PostsList } from '@/components/PostsList';
import { SpinLoader } from '@/components/SpinLoader';
import Image from 'next/image';

import Link from 'next/link';
import { Suspense } from 'react';

export default async function HomePage() {
  return (
    <Container>
     <Header/>

     <section className=''>
      <Link href='#'>
      <Image src='/images/bryen_0.png' width={1200} height={729} alt='titulo do texto'/>
      </Link>
      <div></div>
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
