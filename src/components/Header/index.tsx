'use client';

import clsx from 'clsx';
import Link from 'next/link';

export function Header() {
  console.log('HEADER');

  return (
    <header>
      <h1
        className={clsx(
          'text-4xl/normal font-extrabold py-8',
          'sm:text-5xl/normal sm:py-10',
          'md:text-6xl/normal md:py-11',
          'lg:text-7xl/normal lg:py-12',
        )}
      >
        <Link href='#'>Código &lt;br&gt;</Link>
      </h1>
    </header>
  );
}
