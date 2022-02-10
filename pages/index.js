import Head from "next/head";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Results from "../components/Results";
import requests from "../utils/requests";

export default function Home({results}) {
  return (
    <div>
      <Head>
        <title>Moma Movie</title>
        <link href="../public/favicon.ico" />
      </Head>
      <Header />
      <Nav />
      <Results results={results} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const gendre = context.query.gendre;

  const request = await fetch(
    `https://api.themoviedb.org/3${requests[gendre]?.url || requests.fetchTrending.url}`,
  ).then((res) => res.json());
  return {
    props: {
      results: request.results,
    },
  };
}
