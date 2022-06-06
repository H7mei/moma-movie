import Head from 'next/head';
import Header from '../../components/Header';
import Nav from '../../components/Nav';
import Results from '../../components/Results';
import tv from '../../utils/tv';

export default function index({results}) {
  return (
    <div id='tv'>
      <Head>
        <title>Moma Movie</title>
        <link href='../public/favicon.ico' />
      </Head>
      <Header />
      <Nav media='tv' />
      <Results results={results} media='tv' />
    </div>
  );
}

export async function getServerSideProps(context) {
  const gendre = context.query.gendre;

  const request = await fetch(
    `https://api.themoviedb.org/3${tv[gendre]?.url || tv.fetchTopRated.url}`,
  ).then((res) => res.json());
  return {
    props: {
      results: request.results,
    },
  };
}
