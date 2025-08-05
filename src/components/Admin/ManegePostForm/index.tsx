'use client'

import { Button } from "@/components/Button";
import { InputCheckbox } from "@/components/InputCheckbox";
import { InputText } from "@/components/InputText";
import { MarkdownEditor } from "@/components/MarkdownEditor";


export function ManegePostForm() {
  return (
    <form action="" className='mb-16'>
          <div className='flex flex-col gap-6'>
            <InputCheckbox labelText='Checkbox' />

            <MarkdownEditor labelText="Conteudo" disabled={false} textAreaName="content" />
    
            <InputText placeholder='Digite seu nome' id={''} labelText={'Label'} />
            <InputText placeholder='Digite seu nome' id={''} labelText={''} />
    
            <div className='mt-4'>
              <Button type='submit' size='md'>Enviar</Button>
            </div>
          </div>
        </form>
  )
}