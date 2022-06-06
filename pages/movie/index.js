import Head from 'next/head';
import Header from '../../components/Header';
import Nav from '../../components/Nav';
import Results from '../../components/Results';
import movie from '../../utils/movie';

export default function index({results}) {
  return (
    <div id='movie'>
      <Head>
        <title>Moma Movie</title>
        <link href='../public/favicon.ico' />
      </Head>
      <Header />
      <Nav media='movie' />
      <Results results={results} media='movie' />
    </div>
  );
}

export async function getServerSideProps(context) {
  const gendre = context.query.gendre;

  const request = await fetch(
    `https://api.themoviedb.org/3${
      movie[gendre]?.url || movie.fetchTopRated.url
    }`,
  ).then((res) => res.json());
  return {
    props: {
      results: request.results,
    },
  };
}
