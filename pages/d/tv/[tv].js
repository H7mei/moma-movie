/* eslint-disable react-hooks/rules-of-hooks */
import {useRouter} from "next/router";
import Link from "next/link";
import Header from "../../../components/Header";
import Image from "next/image";
import Wave from "../../../public/wave.svg";
import Head from "next/head";
import Provider from "../../../components/Provider";

function home() {
  const router = useRouter();
  const {tv} = router.query;
  const link = `https://www.themoviedb.org/tv/${tv}`;

  return (
    <div className="leading-normal tracking-normal text-white gradient">
      <Head>
        <title>direx</title>
      </Head>
      <Header />
      <div className="pt-5 mb-40">
        <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
          <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
            <p className="uppercase tracking-loose w-full">Yeah you got Your Movie!!</p>
            <h1 className="my-4 text-5xl font-bold leading-tight gradient-text">
              Tekan Detail untuk info lebih lengkap tentang filmnya.
            </h1>
            <p className="leading-normal text-2xl mb-8">
              ini kalo mau nonton buka dari web lain ya dibawah ada linknya
            </p>
            <Link href={link} passHref>
              <button className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                Detail
              </button>
            </Link>
          </div>
          <div className="w-full md:w-3/5 py-6 text-center">
            <Image
              className="w-full md:w-4/5 z-50"
              src="https://i.postimg.cc/52txG4rw/Desain-tanpa-judul.png"
              alt="image"
              width={470}
              height={400}
            />
          </div>
        </div>
      </div>
      <div className="relative -mt-12 lg:-mt-24">
        <Wave />
      </div>
      <section className="border-b py-8 bg-white">
        <div className="container max-w-5xl mx-auto m-8">
          <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
            Tempat Nonton Favorit
          </h1>
          <div className="w-full mb-4">
            <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>
          <Provider />
        </div>
        <div className="flex flex-col w-full  justify-center items-end text-center md:text-left">
          <Link href="/" passHref>
            <button className="mx-auto lg:mx-0 hover:underline bg-[#23062a] text-white font-bold my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline ease-out-in">
              kembali
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default home;
