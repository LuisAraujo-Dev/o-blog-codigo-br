'use client'

import { Button } from "@/components/Button";
import { InputText } from "@/components/InputText";
import { MarkdownEditor } from "@/components/MarkdownEditor";
import { ImageUploader } from "../ImageUploader";
import { InputCheckbox } from "@/components/InputCheckbox";
import { useState } from "react";
import { dto } from "@/dto/dto";

type ManegePostFormProps = {
  dto?: dto; 
}

export function ManegePostForm({dto}: ManegePostFormProps) {
  const [contentValue, setContentValue] = useState(dto?.content || '');

  return (
    <form action="" className='mb-16'>
      <div className='flex flex-col gap-6'>
        <InputText
          labelText="ID"
          name="id"
          placeholder="ID gerado automaticamente"
          type="text"
          defaultValue={dto?.id || ''}
          readOnly
        />

        <InputText
          labelText="Slug"
          name="slug"
          placeholder="Slug gerada automaticamente"
          type="text"
          defaultValue={dto?.slug || ''}
          readOnly
        />

        <InputText
          labelText="Autor"
          name="author"
          placeholder="Digite o nome do autor"
          type="text"
          defaultValue={dto?.author || ''}
        />


        <InputText
          labelText="Título"
          name="title"
          placeholder="Digite um Título"
          type="text"
          defaultValue={dto?.title || ''}
        />

        <InputText
          labelText="Excerto"
          name="excerpt"
          placeholder="Digite o resumo"
          type="text"
          defaultValue={dto?.excerpt || ''}
        />

        <MarkdownEditor
          labelText="Conteúdo"
          value={contentValue}
          setValue={setContentValue}
          textAreaName="content"
          disabled={false}
        />

        <ImageUploader />

        <InputText
          labelText="URL da imagem de capa"
          name="coverImageUrl"
          placeholder="Digite a url da imagem"
          type="text"
          defaultValue={dto?.coverImageUrl || ''}
        />

        <InputCheckbox
          labelText="Publicar"
          name="published"
          type="checkbox"
          defaultChecked={dto?.published || false}
        />

        <div className='mt-4'>
          <Button type='submit' size='md'>Enviar</Button>
        </div>
      </div>
    </form>
  )
}