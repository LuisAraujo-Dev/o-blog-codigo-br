import { ManegePostForm } from '@/components/Admin/ManegePostForm';
import { makePlublicPost } from '@/dto/dto';
import { Metadata } from 'next';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Criar post'
}



export default async function AdminPostNewPage() {

    const publicPost = makePlublicPost(post)
  
  return (
    <div className='flex flex-col gap-6'>
      <h1 className='text-xl font-extrabold'>Cria post</h1>
    <ManegePostForm dto={publicPost}/>
    </div>
  );
}
