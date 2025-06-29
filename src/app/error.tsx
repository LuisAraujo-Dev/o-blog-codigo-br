'use client';

import ErroMessage from '@/components/ErroMessage';
import { useEffect } from 'react';

type RootErrorPage = {
  error: Error,
  reset: () => void
}

export default function RootErrorPage({error}: RootErrorPage) {
  useEffect(() => {
   // console.log(error)
  }, [error])

  return (
    <ErroMessage
      pageTitle='Internal Server Error'
      contentTitle='501'
      content='Ocorreu um erro do qual a nossa aplicação não conseguiu se recuperar. Tente novamente mais tarde.'
    />
  );
}
