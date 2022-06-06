import Head from 'next/head';
import react from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Results from '../components/Results';
import trending from '../utils/trending';

export default function Home({results}) {
  return (
    <div id='main'>
      <Head>
        <title>Moma Movie</title>
        <link href='../public/favicon.ico' />
      </Head>
      <Header />
      <div className='mb-10'>
        <h1 className='-mb-2 text-5xl font-bold leading-tight gradient-text flex justify-center'>
          Trending.
        </h1>
        <p className='flex justify-center text-sm z-auto'>
          trending movie last week
        </p>
      </div>
      <Results results={results} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const gendre = context.query.gendre;

  const request = await fetch(
    `https://api.themoviedb.org/3${trending.fetchTrending.url}`,
  ).then((res) => res.json());
  return {
    props: {
      results: request.results,
    },
  };
}
