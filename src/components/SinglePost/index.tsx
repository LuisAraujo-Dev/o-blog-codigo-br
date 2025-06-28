import { findPostBySlugCached } from '@/lib/post/queries';
import Image from 'next/image';
import { PostHeading } from '../PostHeading';
import { PostDate } from '../PostDate';

type SinglePostProps = {
  slug: string;
};

export async function SinglePost({ slug }: SinglePostProps) {
  const post = await findPostBySlugCached(slug);

  return (
    <article className='mb-16'>
      <header className='group flex flex-col gap-4 mb-4'>
        <Image
          src={post.coverImageUrl}
          width={1200}
          height={720}
          alt={post.title}
          className='rounded-xl '
        />

        <PostHeading url={`/post/${post.slug}`}>{post.title}</PostHeading>
        <p>{post.author}</p> | <PostDate dateTime={post.createdAt}/>
      </header>

      <p className='text-xl mb-6 text-slate-600'>{post.excerpt}</p>

      <div>{post.content}</div>
    </article>
  );
}
