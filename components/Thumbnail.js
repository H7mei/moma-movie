/* eslint-disable react/display-name */
import Image from 'next/image';
import {ThumbUpIcon} from '@heroicons/react/outline';
import {forwardRef} from 'react';
import Link from 'next/link';
import react from 'react';

const CustomComponent = react.forwardRef((props, ref) => (
  <a ref={ref} {...props}></a>
));

function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Thumbnail = forwardRef(({result, media}, ref) => {
  const BASE_URL = 'https://image.tmdb.org/t/p/original/';

  const [isLoading, setLoading] = react.useState(true);

  return (
    <div
      ref={ref}
      className='group cursor-pointer p-2 transition duration-200 ease-in-out transform sm:hover:scale-105 hover:z-50'
    >
      <Link
        href={`/d/${result.media_type || media}/${result.id}`}
        key={result.id}
        id={result.id}
        preload
        passHref
      >
        <CustomComponent>
          <Image
            layout='responsive'
            src={
              `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
              `${BASE_URL}${result.poster_path}`
            }
            height={1080}
            width={1920}
            objectFit='cover'
            priority
            alt=''
            className={cn(
              'duration-100 ease-in-out group-hover:opacity-75',
              isLoading
                ? 'scale-110 blur-2xl grayscale'
                : 'scale-100 blur-0 grayscale-0',
            )}
            onLoadingComplete={() => setLoading(false)}
          />
        </CustomComponent>
      </Link>

      <div className='p-2'>
        <p className='truncate max-w-md'>{result.overview}</p>
        <h2 className='mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold'>
          {result.name || result.title || result.original_name}
        </h2>
        <p className='flex items-center opacity-0 group-hover:opacity-100'>
          {result.media_type && `${result.media_type} •`}{' '}
          {result.release_date || result.first_air_date} •{' '}
          <ThumbUpIcon className='h-5 mx-2' /> {result.vote_count}
        </p>
      </div>
    </div>
  );
});

export default Thumbnail;
