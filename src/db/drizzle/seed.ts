import { JsonPostRepository } from '@/repositories/post/json-post-repository';
import { drizzleDb } from '.'; // Esta importação está correta
import { postsTable } from './schemas';

(async () => {
  const jsonPostRepository = new JsonPostRepository();
  const posts = await jsonPostRepository.findAll();

  // **** LINHAS DE DEBUG ADICIONADAS AQUI ****
  console.log('--- DEPURANDO O SEED ---');
  console.log('Posts retornados por JsonPostRepository.findAll():', posts);
  console.log('Número de posts retornados:', posts.length);
  if (posts.length > 0) {
    console.log('Primeiro post (para verificar formato):', posts[0]);
  } else {
    console.log('AVISO: JsonPostRepository.findAll() retornou um array vazio.');
  }
  console.log('------------------------');

  try {
    if (posts.length === 0) {
      console.log('Nenhum post para inserir. Pulando a inserção.');
      return; // Sai da função se não houver posts
    }

    await drizzleDb.delete(postsTable);

    await drizzleDb.insert(postsTable).values(posts);

    console.log();
    console.log(`${posts.length} posts foram salvos na base de dados.`);
    console.log();
  } catch (e) {
    console.log();
    console.log('Ocorreu um erro ao inserir no banco de dados com o Drizzle...');
    console.log();
    console.error(e); // Use console.error para erros
    console.log();
  }
})();
