/* eslint-disable import/no-anonymous-default-export */
const API_KEY = process.env.API_KEY;

export default {
  fetchTrending: {
    title: "Trending",
    url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  },
  fetchTopRated: {
    title: "Top Rated",
    url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  },
  fetchActionMovie: {
    title: "Aksi",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  },
  fetchComedyMovie: {
    title: "Comedy",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  },
  fetchAdventure: {
    title: "Adventure",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=12`,
  },
  fetchHorrorMovie: {
    title: "Horror",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  },
  fetchRomanceMovie: {
    title: "Romance",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  },
  fetchDocumentaryMovie: {
    title: "Dokumenter",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  },
  fetchMystery: {
    title: "Misteri",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=18`,
  },
  fetchFantasy: {
    title: "Fantasy",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=14`,
  },
  fetchDrama: {
    title: "Drama",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
  },
  fetchSciFi: {
    title: "Sci-Fi",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
  },
  fetchWestern: {
    title: "Western",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
  },
  fetchWarMovie: {
    title: "Perang",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10752`,
  },
  fetchFamily: {
    title: "Family",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10751`,
  },
  fetchAnimation: {
    title: "Animation",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
  },
  fetchCrime: {
    title: "Kriminal",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=80`,
  },
  fetchThriller: {
    title: "Thriller",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=53`,
  },
  fetchTV: {
    title: "TV Movie",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10770`,
  },
  fetchMusic: {
    title: "Drama Musical",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10402`,
  },
  fetchHistory: {
    title: "Sejarah",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=36`,
  },
};
