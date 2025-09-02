'use client'

import { Button } from "@/components/Button";
import { InputText } from "@/components/InputText";
import { MarkdownEditor } from "@/components/MarkdownEditor";
import { ImageUploader } from "../ImageUploader";
import { InputCheckbox } from "@/components/InputCheckbox";
import { useActionState, useEffect, useState } from "react";
import { Dto, makePartialPublicPost } from "@/dto/dto";
import { toast } from "react-toastify";
import { createPostAction } from "@/actions/post/create-post-action";
import { updatePostAction } from "@/actions/post/update-post-action";
import { useRouter, useSearchParams } from "next/navigation";

type ManegePostFormUpdateProps = {
  mode: 'update',
  dto: Dto,
}

type ManegePostFormCreateProps = {
  mode: 'create',
}

type ManegePostFormProps = 
  | ManegePostFormUpdateProps 
  | ManegePostFormCreateProps

export function ManegePostForm(props : ManegePostFormProps) {
  const {mode} = props; 
  const searchPatams = useSearchParams(); 
  const created = searchPatams.get('created'); 
  const router = useRouter()

  let dto;  
  if(mode === 'update') {
    dto = props.dto
  }

  const actionsMap = {
    update: updatePostAction,
    create: createPostAction,  
  }

  const initialState = {
    formState: makePartialPublicPost(dto),
    errors: [],
  }
  const [state, action, isPending] = useActionState(
    actionsMap[mode],
    initialState,
  )

  useEffect(() => {
    if (state.errors.length > 0) {
      toast.dismiss();
      state.errors.forEach(error => toast.error(error))
    }
  }, [state.errors])

  useEffect(() => {
    if (state.success) {
      toast.dismiss();
      toast.success('Post atualizado com sucesso!')
    }
  }, [state.success])

  useEffect(() => {
    if (created === '1') {
      toast.dismiss(); 
      toast.success('Post criado com sucesso!'); 
      const url = new URL(window.location.href); 
      url.searchParams.delete('created')
      router.replace(url.toString())
    }
  }, [created, router])

  const { formState } = state;
  const [contentValue, setContentValue] = useState(dto?.content || '');
  return (
    <form action={action} className='mb-16'>
      <div className='flex flex-col gap-6'>
        <InputText
          labelText="ID"
          name="id"
          placeholder="ID gerado automaticamente"
          type="text"
          defaultValue={formState.id}
          disabled={isPending}
          readOnly
        />

        <InputText
          labelText="Slug"
          name="slug"
          placeholder="Slug gerada automaticamente"
          type="text"
          defaultValue={formState.slug}
          disabled={isPending}
          readOnly
        />

        <InputText
          labelText="Autor"
          name="author"
          placeholder="Digite o nome do autor"
          type="text"
          disabled={isPending}
          defaultValue={formState.author}
        />


        <InputText
          labelText="Título"
          name="title"
          placeholder="Digite um Título"
          type="text"
          defaultValue={formState.title}
          disabled={isPending}
        />

        <InputText
          labelText="Excerto"
          name="excerpt"
          placeholder="Digite o resumo"
          type="text"
          defaultValue={formState.excerpt}
          disabled={isPending}
        />

        <MarkdownEditor
          labelText="Conteúdo"
          value={contentValue}
          setValue={setContentValue}
          textAreaName="content"
          disabled={isPending}
        />

        <ImageUploader disabled={isPending}/>

        <InputText
          labelText="URL da imagem de capa"
          name="coverImageUrl"
          placeholder="Digite a url da imagem"
          type="text"
          defaultValue={formState.coverImageUrl}
          disabled={isPending}
        />

        <InputCheckbox
          labelText="Publicar"
          name="published"
          type="checkbox"
          defaultChecked={formState.published}
          disabled={isPending}
        />

        <div className='mt-4'>
          <Button type='submit' size='md'
          disabled={isPending}>Enviar</Button>
        </div>
      </div>
    </form>
  )
}