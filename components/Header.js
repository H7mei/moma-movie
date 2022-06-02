import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  SparklesIcon,
  SearchIcon,
  UserIcon,
} from '@heroicons/react/outline';
import Image from 'next/image';
import Headeritem from './Headeritem';
import Link from 'next/link';

function Header() {
  return (
    <header className='flex flex-col sm:flex-row m-5 justify-between items-center h-auto'>
      <div className='flex flex-grow justify-evenly max-w-2xl'>
        <Headeritem title='HOME' Icon={HomeIcon} data='/' />
        <Headeritem
          title='KATEGORI'
          Icon={CollectionIcon}
          data='/e/collection'
        />
        <Headeritem
          title='CARI'
          Icon={SearchIcon}
          data='https://www.google.com/'
        />
        <Headeritem
          title='DEV'
          Icon={UserIcon}
          data='https://awesome-easley-7e8a3e.netlify.app/'
        />
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
