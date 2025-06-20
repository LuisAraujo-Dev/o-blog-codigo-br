import { PostCouverImage } from '../PostCouverImage';
import { PostSummary } from '../PostSummary';

export function PostFeatured() {


  const slug = 'qualquer';
  const postLink = `/post/${slug}`;

  return (
    <section className={'grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group'}>
      <PostCouverImage
        linkProps={{
          href: postLink,
        }}
        imageProps={{
          width: 1200,
          height: 720,
          src: '/images/bryen_0.png',
          alt: 'Alt da imagem',
          priority: true,
        }}
      />

        <PostSummary postHeading='h1' postLink={postLink} createdAt={'00/00/0000 às 00h00'} title={'title post'} excerpt={'sdaad asdasdsa sdadads asdadsa '} />

    </section>
  );
}
