import { postRepository } from '@/repositories/post';
import { PostCouverImage } from '../PostCouverImage';
import { PostSummary } from '../PostSummary';

export async function PostsList() {
  const posts = await postRepository.findAll();

  return (
    <div className='grid grid-cols-1  gap-8 sm:grid-cols-2 lg:grid-cols-3'>
      {posts.map(post => {
        const postLink = `/post/${post.slug}`;

        return (
          <div className='flex flex-col group gap-4 ' key={post.id}>
            <PostCouverImage
              linkProps={{
                href: postLink,
              }}
              imageProps={{
                width: 1200,
                height: 720,
                src: post.coverImageUrl,
                alt: post.title,
              }}
            />

            <PostSummary
              title={post.title}
              excerpt={post.excerpt}
              createdAt={post.createdAt}
              postLink={postLink}
              postHeading='h2'
            />
          </div>
        );
      })}
    </div>
  );
}
