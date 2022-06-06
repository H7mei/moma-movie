/* eslint-disable import/no-anonymous-default-export */
const API_KEY = process.env.API_KEY;

export default {
  fetchTopRated: {
    title: 'Top Rated',
    url: `/tv/top_rated?api_key=${API_KEY}&language=en-US`,
  },
  fetchAction: {
    title: 'Action & Adventure',
    url: `/discover/tv?api_key=${API_KEY}&with_genres=10759`,
  },
  fetchAnimation: {
    title: 'Animasi',
    url: `/discover/tv?api_key=${API_KEY}&with_genres=16`,
  },
  fetchComedy: {
    title: 'Komedi',
    url: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
  },
  fetchCrime: {
    title: 'Kejahatan',
    url: `/discover/tv?api_key=${API_KEY}&with_genres=80`,
  },
  fetchDocumentary: {
    title: 'Dokumenter',
    url: `/discover/tv?api_key=${API_KEY}&with_genres=99`,
  },
  fetchDrama: {
    title: 'Drama',
    url: `/discover/tv?api_key=${API_KEY}&with_genres=18`,
  },
  fetchFamily: {
    title: 'Family',
    url: `/discover/tv?api_key=${API_KEY}&with_genres=10751`,
  },
  //ss
  fetchRomance: {
    title: 'Romance',
    url: `/discover/tv?api_key=${API_KEY}&with_genres=10749`,
  },
  fetchMystery: {
    title: 'Misteri',
    url: `/discover/tv?api_key=${API_KEY}&with_genres=18`,
  },
  fetchWestern: {
    title: 'Western',
    url: `/discover/tv?api_key=${API_KEY}&with_genres=37`,
  },
  fetchWarMovie: {
    title: 'Perang',
    url: `/discover/tv?api_key=${API_KEY}&with_genres=10752`,
  },
  fetchAnimation: {
    title: 'Animation',
    url: `/discover/tv?api_key=${API_KEY}&with_genres=16`,
  },
  fetchCrime: {
    title: 'Kriminal',
    url: `/discover/tv?api_key=${API_KEY}&with_genres=80`,
  },
  fetchThriller: {
    title: 'Thriller',
    url: `/discover/tv?api_key=${API_KEY}&with_genres=53`,
  },
  fetchMusic: {
    title: 'Drama Musical',
    url: `/discover/tv?api_key=${API_KEY}&with_genres=10402`,
  },
  fetchHistory: {
    title: 'Sejarah',
    url: `/discover/tv?api_key=${API_KEY}&with_genres=36`,
  },
};
