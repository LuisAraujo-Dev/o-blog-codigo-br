import { Dto } from "@/dto/dto"

export type CreatePostActionState = {
  formState: Dto,
  errors: string[],
}

export async function CreatePostAction(
  prevState: CreatePostActionState,
  formData: FormData,
): Promise<CreatePostActionState> {
  // TODO: VERIFICAR SE O USUARIO ESTA LOGADO 

  if (!(formData instanceof FormData)) {
    return {
      formState: { ...prevState.formState, title },
      errors: ['Dados inválidos']
    }

    const formDataToObj = Object.fromEntries(formData.entries())
  }
}