import { postRepository } from '@/repositories/post';
import { PostCouverImage } from '../PostCouverImage';

export async function PostsList() {
  const posts = await postRepository.findAll();

  return (
    <div>
      {posts.map(post => {
        return (
          <div key={post.id}>
            <PostCouverImage
              linkProps={{
                href: `/post.${post.slug}`,
              }}
              imageProps={{
                width: 1200,
                height: 720,
                src: post.coverImageUrl,
                alt: post.title,
              }}
            />
          </div>
        );
      })}
    </div>
  );
}
