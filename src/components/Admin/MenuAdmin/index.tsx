import clsx from 'clsx';
import { FileTextIcon, HouseIcon } from 'lucide-react';
import Link from 'next/link';

export function MenuAdmin() {
  const navClass = clsx(
    `bg-slate-900 text-slate-100 rounded-lg`,
    'flex flex-col mb-8',
    'sm:flex-row sm:flex-wrap',
    'overflow-hiden',
    'h-10',
  );
  const linkClass = clsx(
    '[&>svg]:w-[16px] [&>svg]:h-[16px] px-4',
    'flex items-center justify-start gap-2',
    'trasition hover:bg-slate-800 hover:rounded-lg',
    'h-10',
    'shrink-0',
  );

  return (
    <nav className={navClass}>
      <a className={linkClass} href='/' target='_blank'>
        <HouseIcon />
        Home
      </a>

      <Link className={linkClass} href={'/admin/post'}>
        <FileTextIcon />
        Posts
      </Link>
    </nav>
  );
}
