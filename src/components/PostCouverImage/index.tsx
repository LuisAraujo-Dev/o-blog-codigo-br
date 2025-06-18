import Link from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';

type PostCouverImageProps = {
  linkProps: React.ComponentProps<typeof Link>;
  imageProps: React.ComponentProps<typeof Image>;
};

export function PostCouverImage({
  linkProps,
  imageProps,
}: PostCouverImageProps) {
  return (
    <Link
      {...linkProps}
      className={clsx(
        'w-full',
        'h-full',
        'overflow-hidden',
        'rounded-xl',
        linkProps.className,
      )}
    >
      <Image
        {...imageProps}
        className={clsx(
          'w-full',
          'h-full',
          'object-cover',
          'object-center',
          'group-hover:scale-105',
          'transition',
          imageProps.alt,
        )}
        alt='titulo do texto'
      />
    </Link>
  );
}
