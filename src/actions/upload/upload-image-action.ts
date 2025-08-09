'use server'

import { IMAGE_UPLOADER_MAX_SIZE } from "@/lib/constants";

type uploadInageActionResult = {
  url: string, 
  error: string, 
}


export async function uploadInageAction(formData: FormData): Promise<uploadInageActionResult> {
 const makeResult = ({url = '', error = ''}) => ({url , error});
  
  if (!(formData instanceof FormData)) {
    return makeResult({error: 'Dados invalidos'})
  }

  const file = formData.get('file')

  if (!(file instanceof File)) {
    return makeResult({error: 'Arquivo invalido'})
  }

  if (file.size > IMAGE_UPLOADER_MAX_SIZE) {
        return makeResult({error: 'Arquivo muito grande'})

  }

  if (!file.type.startsWith('image/')) {
            return makeResult({error: 'Imagem invalida'})

  }

  return makeResult({url: 'URL'})
 }