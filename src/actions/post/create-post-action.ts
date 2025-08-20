'use server';

import { Dto, makePartialPublicPost } from "@/dto/dto";
import { PostCreateSchema } from "@/lib/post/validations";
import { PostModel } from "@/models/post/post-model";
import { getZodErrorMessages } from "@/utils/get-zod-error-messages";
import { makeSlugFromText } from "@/utils/make-slug-from-texto";
import { v4 as uuidV4 } from 'uuid'


type CreatePostActionState = {
  formState: Dto;
  errors: string[];
};

export async function CreatePostAction(
  prevState: CreatePostActionState,
  formData: FormData,
): Promise<CreatePostActionState> {
  // TODO: verificar se o usuário tá logado

  if (!(formData instanceof FormData)) {
    return {
      formState: prevState.formState,
      errors: ['Dados inválidos'],
    };
  }

  const formDataToObj = Object.fromEntries(formData.entries());
  const zodParsedObj = PostCreateSchema.safeParse(formDataToObj)

  if (!zodParsedObj.success) {
    const errors = getZodErrorMessages(zodParsedObj.error.format());
    return {
      errors, 
      formState: makePartialPublicPost(formDataToObj), 
    }
  }

  const validPostData = zodParsedObj.data; 
  const newPost: PostModel = {
    ...validPostData, 
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    id: uuidV4(),
    slug: makeSlugFromText(validPostData.title),   
  }
  return {
    formState: newPost,
    errors: [],
  };
}