import { PostModel } from "@/models/post/post-model";
import { PostRepository } from "./post-repository";

const ROOT_DIR = process.cwd();

export class JsonPostRepository implements PostRepository{
  private async readFromDisk() {}

  async findAll(): Promise<PostModel[]> {

  }
}

export const PostRepository = new JsonPostRepository();

console.log('ola mundo')
