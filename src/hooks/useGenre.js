import useData from "./useData";

const useGenres = () => useData("https://api.rawg.io/api/genres");

export default useGenres;
