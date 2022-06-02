import Link from 'next/link';

function Headeritem({Icon, title, data}) {
  return (
    <Link href={`${data}`} passHref>
      <div className='group flex flex-col items-center cursor-pointer w-12 sm:w-12 hover:text-white'>
        <Icon className='h-8 mb-1 group-hover:animate-bounce' />
        <p className='tracking-widest opacity-0 group-hover:opacity-100'>
          {title}
        </p>
      </div>
    </Link>
  );
}

export default Headeritem;
