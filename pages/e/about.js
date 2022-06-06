import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function about() {
  return (
    <div>
      <Head>
        <title>About</title>
      </Head>
      <section className='container mx-auto p-10 md:py-20 px-0 md:p-10 md:px-0 md:my-0 my-24'>
        <section className='relative px-10 md:p-0 transform duration-500 hover:shadow-2xl cursor-pointer hover:-translate-y-1'>
          <Image
            className='xl:max-w-6xl bg-white'
            src='https://i.postimg.cc/Mp5GJWkr/about.jpg'
            alt=''
            width={1920}
            height={1080}
            objectFit='cover'
            priority
          />
          <div className='content bg-[#9225ad5e] p-2 pt-8 md:p-12 pb-12 lg:max-w-lg w-full lg:absolute top-48 right-5 '>
            <div className='flex justify-between font-bold text-sm'>
              <p>Tentang Web</p>
              <p className='text-gray-400'>10th Mar, 2022</p>
            </div>
            <h1 className='text-3xl font-semibold mt-4 md:mt-10 gradient-text'>
              Hola!!
            </h1>
            <p className='my-3 text-justify font-medium text-gray-100 leading-relaxed'>
              Ini merupakan Web Melihat film dan tv series, meggunakan API dari
              TMDB, yang bertujuan untuk mencari filem/series yang mau ditonton.
            </p>
            <p>
              feel free to check out my{' '}
              <Link href='https://hanafichoi.netlify.app'>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  className='underline'
                >
                  portfolio.
                </a>
              </Link>
            </p>
          </div>
        </section>
      </section>
      <div className='flex flex-col w-full  justify-center items-start text-center md:text-left md:absolute top-0'>
        <Link href='/' passHref>
          <button className='mx-auto lg:mx-0 hover:underline text-[#23062a] bg-white font-bold my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline ease-out-in'>
            kembali
          </button>
        </Link>
      </div>
    </div>
  );
}

export default about;
