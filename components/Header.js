import {
  FilmIcon,
  HomeIcon,
  SparklesIcon,
  ChipIcon,
} from '@heroicons/react/outline';
import Image from 'next/image';
import Headeritem from './Headeritem';
import Link from 'next/link';
import react from 'react';

const CustomComponent = react.forwardRef((props, ref) => (
  <a ref={ref} {...props}></a>
));

function Header() {
  return (
    <header className='flex flex-col sm:flex-row p-5 justify-between items-center h-auto -mt-7 sm:mt-0'>
      <div className='flex flex-grow justify-start max-w-2xl mt-10 space-x-11 ml-0 md:ml-6'>
        <Headeritem title='HOME' Icon={HomeIcon} data='/' />
        <Headeritem title='FILM' Icon={FilmIcon} data='/movie' />
        <Headeritem title='SERIES' Icon={ChipIcon} data='/tv' />
        <Headeritem title='ABOUT' Icon={SparklesIcon} data='/e/about' />
      </div>
      <Link href='/' passHref preload>
        <CustomComponent>
          <Image
            className='object-contain cursor-pointer'
            src='https://i.postimg.cc/3RxtJJW3/logo-moviee.png'
            width={200}
            height={100}
            alt=''
          />
        </CustomComponent>
      </Link>
    </header>
  );
}

export default Header;
