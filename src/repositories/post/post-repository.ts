import { PostModel } from "@/models/post/post-model";

export interface PostRepository {
  // metodos
  findAll(): Promise<PostModel[]> // retorne todos os posts
}
