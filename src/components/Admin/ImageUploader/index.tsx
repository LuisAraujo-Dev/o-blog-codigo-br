'use clinte'

import { Button } from "@/components/Button";
import { IMAGE_UPLOADER_MAX_SIZE } from "@/lib/constants";
import { FileInput, ImageUpIcon } from "lucide-react";
import { useRef } from "react";
import { toast } from "react-toastify";

export function ImageUploader() {
  const fileInputRef = useRef<HTMLInputElement>(null)

  function handleClick() {
    if (!fileInputRef.current) return

    fileInputRef.current.click()
  };

  function handleChange() {
    if (!fileInputRef.current) return;

    const file = fileInputRef?.current.files?.[0];

    if (!file) return;

    if (file.size > IMAGE_UPLOADER_MAX_SIZE) {
      const readableMaxSize = IMAGE_UPLOADER_MAX_SIZE / 1024;
      toast.error(`Imagem muito grande. Max: ${readableMaxSize}KB.`);

      fileInputRef.current.value = '';
      return;
    }

    const formData = new FormData()
    formData.append('file', file)

    fileInputRef.current.value = ''
  }

  return (
    <div className="flex flex-col gap-2 py-4">
      <Button onClick={handleClick} type="button" className="self-start">
        <ImageUpIcon />
        Enviar imagem</Button>

      <input
        onChange={handleChange}
        ref={fileInputRef}
        className='hidden'
        name='file'
        type="file"
        accept="image/*" />
    </div>
  );
}