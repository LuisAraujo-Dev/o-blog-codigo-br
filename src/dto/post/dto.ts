import { PostModel } from "@/models/post/post-model";

export type Dto = Omit<PostModel, 'updatedAt'>;

export const makePartialDto = (post?: Partial<PostModel>): Dto => {
  return {
    id: post?.id || '',
    slug: post?.slug || '',
    title: post?.title || '',
    excerpt: post?.excerpt || '',
    author: post?.author || '',
    content: post?.content || '',
    coverImageUrl: post?.coverImageUrl || '',
    createdAt: post?.createdAt || '',
    published: post?.published || false,
  }
};

export const makeDtoFromDb = (post: PostModel): Dto => {
  return makePartialDto(post);
}; 