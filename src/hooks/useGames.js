import { useEffect, useState } from "react";
import axios, { CanceledError } from "axios";

const useGames = () => {
  const [games, setGames] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.rawg.io/api/games",
          {
            params: {
              key: "11da95f2f2304c89bb370fb6b20d2969",
              // Add any other parameters you need for filtering or sorting
            },
          },
          { signal: controller.signal }
        );
        setGames(response.data.results);
      } catch (err) {
        if (err instanceof CanceledError) return;
        setError(err.message);
      }
    };

    fetchData();

    return () => controller.abort();
  }, []);

  return { games, error };
};

export default useGames;