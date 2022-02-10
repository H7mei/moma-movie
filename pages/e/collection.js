import Head from "next/head";
import React from "react";
import Header from "../../components/Header";
import Nav from "../../components/Nav-col";

function collection() {
  return (
    <div>
      <Head>
        <title>Movie Kategori</title>
      </Head>
      <Header />
      <Nav />
    </div>
  );
}

export default collection;
