import requests from '../utils/movie';
import {useRouter} from 'next/router';
import Link from 'next/link';

function Nav() {
  const router = useRouter();
  return (
    <div>
      <nav className=' max-w-5xl mx-auto m-8'>
        <div className='container'>
          <h1 className='w-full my-2 text-5xl font-bold leading-tight text-center gradient-text'>
            Kategori.
          </h1>
          <div className='w-full mb-4'>
            <div className='h-1 mx-auto  w-64 opacity-25 my-0 py-0 rounded-t'></div>
          </div>
        </div>
        <section className='grid lg:grid-cols-3 2xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mx-10'>
          {Object.entries(requests).map(([key, {title, url}]) => (
            <article
              className='mx-full pb-8 bg-cover bg-center cursor-pointer transform duration-500 hover:-translate-y-1 shadow-2xl rounded-xl bg-[#9225ad4d]'
              key={key}
              onClick={() => router.push(`/?gendre=${key}`)}
            >
              <h2
                className='text-center text-3xl mt-8 font-bold min-h-18 px-12 truncate'
                key={key}
              >
                {title}
              </h2>
            </article>
          ))}
        </section>
      </nav>
      <div className='flex flex-col w-full  justify-center items-end text-center md:text-left md:hidden'>
        <Link href='/' passHref>
          <button className='mx-auto lg:mx-0 hover:underline text-[#23062a] bg-white font-bold my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline ease-out-in'>
            kembali
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Nav;
