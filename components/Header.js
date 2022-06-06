import {
  VideoCameraIcon,
  CollectionIcon,
  FilmIcon,
  HomeIcon,
  SparklesIcon,
  SearchIcon,
  ChipIcon,
} from '@heroicons/react/outline';
import Image from 'next/image';
import Headeritem from './Headeritem';
import Link from 'next/link';

function Header() {
  return (
    <header className='flex flex-col sm:flex-row p-5 justify-between items-center h-auto -mt-7 sm:mt-0'>
      <div className='flex flex-grow justify-start max-w-2xl mt-10 space-x-11 ml-0 md:ml-6'>
        <Headeritem title='HOME' Icon={HomeIcon} data='/' />
        <Headeritem title='Movie' Icon={FilmIcon} data='/movie' />
        <Headeritem title='Series' Icon={ChipIcon} data='/tv' />
        <Headeritem title='ABOUT' Icon={SparklesIcon} data='/e/about' />
      </div>
      <Link href='/' passHref>
        <Image
          className='object-contain cursor-pointer'
          src='https://i.postimg.cc/3RxtJJW3/logo-moviee.png'
          width={200}
          height={100}
          alt=''
        />
      </Link>
    </header>
  );
}

export default Header;
