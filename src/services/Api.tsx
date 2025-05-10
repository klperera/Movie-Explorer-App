import axios from "axios";

const themoviedb = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: import.meta.env.VITE_API_KEY,
  },
});

export const getPopularMovies = async () => {
  const response = await themoviedb.get("/movie/popular");
  return await response.data.results;
};

export const searchMovie = async (searchQuery: string) => {
  const response = await themoviedb.get("/search/movie", {
    params: { searchQuery },
  });
  return await response.data.results;
};
