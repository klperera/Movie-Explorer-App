import axios from "axios";

const themoviedb = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: import.meta.env.VITE_TMDB_API_KEY,
  },
});

export const getPopularMovies = async () => {
  const response = await themoviedb.get("/trending/movie/week");
  return await response.data.results;
};

export const searchMovie = async (searchQuery: string) => {
  const response = await themoviedb.get(
    `1/search/movie?query=${searchQuery}&include_adult=true&language=en-US`
  );
  return await response.data.results;
};
