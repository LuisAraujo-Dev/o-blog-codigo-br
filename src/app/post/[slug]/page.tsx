type PostSlugPageProps = {
  params: Promise<{slug: string}>
}

export default async function PostSlugPage({ params }: PostSlugPageProps) {
  const { slug } = await params;
  return <h1>rota dinâmica {slug}</h1>;
}
