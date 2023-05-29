import { useEffect, useState } from "react";
import axios, { CanceledError } from "axios";

const useData = (endPoint) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(endPoint, {
          params: {
            key: "11da95f2f2304c89bb370fb6b20d2969",
            // Add any other parameters you need for filtering or sorting
          },
          signal: controller.signal,
        });
        setData(response.data.results);
        setIsLoading(false);
      } catch (err) {
        if (err instanceof CanceledError) return;
        setError(err.message);
      }
    };

    fetchData();

    return () => controller.abort();
  }, []);

  return { data, error, isLoading };
};

export default useData;
