import movie from '../utils/movie';
import {useRouter} from 'next/router';
import tv from '../utils/tv';

function Nav({media}) {
  const router = useRouter();

  if (media == 'movie') {
    return (
      <nav className='relative mb-10'>
        <div className='flex px-10 py-1 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide'>
          {Object.entries(movie).map(([key, {title, url}]) => (
            <h2
              key={key}
              onClick={() => router.push(`/${media}/?gendre=${key}`)}
              className='last:pr-24 cursor-pointer transition duration-100 transform hover:scale-125 act hover:text-white active:text-purple-500'
            >
              {title}
            </h2>
          ))}
        </div>
        <div className='absolute top-0 right-0 bg-gradient-to-l from-[#23062a] h-10 w-1/12' />
      </nav>
    );
  } else {
    return (
      <nav className='relative mb-10'>
        <div className='flex px-10 py-1 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide'>
          {Object.entries(tv).map(([key, {title, url}]) => (
            <h2
              key={key}
              onClick={() => router.push(`/${media}/?gendre=${key}`)}
              className='last:pr-24 cursor-pointer transition duration-100 transform hover:scale-125 act hover:text-white active:text-purple-500'
            >
              {title}
            </h2>
          ))}
        </div>
        <div className='absolute top-0 right-0 bg-gradient-to-l from-[#23062a] h-10 w-1/12' />
      </nav>
    );
  }
}

export default Nav;
