import { useEffect, useState } from "react";
import axios, { CanceledError } from "axios";

const useGenres = () => {
  const [genres, setGenres] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const fetchGenres = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get("https://api.rawg.io/api/genres", {
          params: {
            key: "11da95f2f2304c89bb370fb6b20d2969",
            // Add any other parameters you need for filtering or sorting
          },
          signal: controller.signal,
        });
        setGenres(response.data.results);
        setIsLoading(false);
      } catch (err) {
        if (err instanceof CanceledError) return;
        setError(err.message);
      }
    };

    fetchGenres();

    return () => controller.abort();
  }, []);

  return { genres, error, isLoading };
};

export default useGenres;
