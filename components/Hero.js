import Image from 'next/image';
import Link from 'next/link';
import Wave from '../public/wave.svg';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {useRouter} from 'next/router';
import react from 'react';

function Hero({data, prov}) {
  const router = useRouter();
  const [copy, setCopy] = react.useState('Copy');
  const BASE_URL = 'https://image.tmdb.org/t/p/original/';

  var id = router.query.mov || router.query.id || router.query.tv;

  const link = `https://www.themoviedb.org/${prov}/${id}`;
  return (
    <>
      <div className='pt-5 mb-40'>
        <div className='container px-3 mx-auto flex flex-wrap flex-col lg:flex-row items-center'>
          <div className='flex flex-col w-full lg:w-2/5 justify-center items-start text-center lg:text-left'>
            <p className='uppercase tracking-loose w-full'>
              Yeah you got Your Movie!!
            </p>
            <h1 className='my-4 text-5xl font-bold leading-tight gradient-text'>
              Copy Judulnya Lalu scroll ke bawah untuk WEB nonton filemnya
            </h1>
            <div className='bg-purple-900 mx-auto p-2 mb-10 lg:mx-0 shadow-md shadow-white lg:text-left'>
              {data.name || data.title || data.original_name}
              <CopyToClipboard
                text={data.title || data.original_name}
                className='ml-2 underline bg-purple-50 text-purple-900 uppercase'
              >
                <button onClick={() => setCopy('Copyed')}>{copy}</button>
              </CopyToClipboard>
            </div>
            <p className='leading-normal text-xl mx-auto lg:mx-0 lg:text-left'>
              info lengkap tentang filmnya
            </p>

            <Link href={link} passHref>
              <a
                className='mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out'
                target='_blank'
                rel='noopener noreferrer'
              >
                Detail
              </a>
            </Link>
          </div>
          <div className='w-full lg:w-3/5 py-6 text-center'>
            <Image
              className='w-full lg:w-3/5 z-50 shadow-lg'
              src={
                `${BASE_URL}${data.backdrop_path || data.poster_path}` ||
                `${BASE_URL}${data.poster_path}`
              }
              alt='image'
              height={1080}
              width={1920}
              objectFit='cover'
              priority
            />
          </div>
        </div>
      </div>
      <div className='relative -mt-12 lg:-mt-24'>
        <Wave />
      </div>
    </>
  );
}

export default Hero;
