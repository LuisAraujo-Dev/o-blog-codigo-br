import { PostModel } from "@/models/post/post-model";

export type dto = Omit<PostModel, 'updatedAt'>;

export const makePlublicPost = (post: PostModel): dto => {
  return {
    id: post.id,
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    author: post.author,
    content: post.content,
    coverImageUrl: post.coverImageUrl,
    createdAt: post.createdAt,
    published: post.published,
  }
}; 