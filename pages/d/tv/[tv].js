/* eslint-disable react-hooks/rules-of-hooks */
import Link from 'next/link';
import Header from '../../../components/Header';
import Head from 'next/head';
import Provider from '../../../components/Provider';
import Hero from '../../../components/Hero';

function home({data}) {
  return (
    <div className='leading-normal tracking-normal text-white gradient'>
      <Head>
        <title>Tv : {data.name || data.title || data.original_name}</title>
      </Head>
      <Header />
      <Hero data={data} prov='tv' />
      <section className='border-b py-8 bg-white'>
        <div className='container max-w-5xl mx-auto m-8'>
          <h1 className='w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800'>
            Tempat Nonton Favorit
          </h1>
          <div className='w-full mb-4'>
            <div className='h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t'></div>
          </div>
          <Provider />
        </div>
        <div className='flex flex-col w-full  justify-center items-end text-center md:text-left'>
          <Link href='/' passHref>
            <button className='mx-auto lg:mx-0 hover:underline bg-[#23062a] text-white font-bold my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline ease-out-in'>
              kembali
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default home;

export async function getServerSideProps(context) {
  const q = context.query;

  const data = await fetch(
    `https://api.themoviedb.org/3/tv/${q.tv}?api_key=${process.env.API_KEY}`,
  ).then((res) => res.json());

  return {
    props: {
      data,
    },
  };
}
