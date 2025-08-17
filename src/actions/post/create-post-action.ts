import { Dto } from "@/dto/dto"

export type CreatePostActionState = {
  formState: Dto,
  errors: string[],
}

export async function CreatePostAction(
  prevState: CreatePostActionState,
  formData: FormData,
): Promise<CreatePostActionState> {
  const title = formData.get('title')?.toString() || '';

  return {
    formState: { ...prevState.formState, title},
    errors: []
  }
}