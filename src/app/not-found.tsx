import ErroMessage from '@/components/ErroMessage';

export default function NotFoundPage() {
  return (
    <ErroMessage
      pageTitle='Página não encontrada'
      contentTitle='404'
      content='Erro 404 - A página que você está tentando acessar não existe neste
            site.'
    />
  );
}
