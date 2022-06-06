/* eslint-disable import/no-anonymous-default-export */
const API_KEY = process.env.API_KEY;

export default {
  fetchTopRated: {
    title: 'Top Rated',
    url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  },
  fetchAction: {
    title: 'Aksi',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  },
  fetchComedy: {
    title: 'Comedy',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  },
  fetchAdventure: {
    title: 'Adventure',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=12`,
  },
  fetchHorror: {
    title: 'Horror',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  },
  fetchRomance: {
    title: 'Romance',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  },
  fetchDocumentary: {
    title: 'Dokumenter',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  },
  fetchMystery: {
    title: 'Misteri',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=18`,
  },
  fetchFantasy: {
    title: 'Fantasy',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=14`,
  },
  fetchDrama: {
    title: 'Drama',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
  },
  fetchSciFi: {
    title: 'Sci-Fi',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
  },
  fetchWestern: {
    title: 'Western',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
  },
  fetchWarMovie: {
    title: 'Perang',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10752`,
  },
  fetchFamily: {
    title: 'Family',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10751`,
  },
  fetchAnimation: {
    title: 'Animation',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
  },
  fetchCrime: {
    title: 'Kriminal',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=80`,
  },
  fetchThriller: {
    title: 'Thriller',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=53`,
  },
  fetchTV: {
    title: 'TV Movie',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10770`,
  },
  fetchMusic: {
    title: 'Drama Musical',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10402`,
  },
  fetchHistory: {
    title: 'Sejarah',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=36`,
  },
};
