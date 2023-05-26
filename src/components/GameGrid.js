import React, { useEffect, useState } from "react";
import axios from "axios";
import { Text } from "@chakra-ui/react";

const GameList = () => {
  const [games, setGames] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://api.rawg.io/api/games", {
          params: {
            key: "11da95f2f2304c89bb370fb6b20d2969",
            // Add any other parameters you need for filtering or sorting
          },
        });
        setGames(response.data.results);
      } catch (error) {
        console.error(error);
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Game List</h1>
      {error && <Text>{error}</Text>}
      {games.map((game) => (
        <div key={game.id}>{game.name}</div>
      ))}
    </div>
  );
};

export default GameList;

// import React, { useEffect, useState } from "react";
// import apiClient from "../services/api-client";

// function GameGrid() {
//   const [games, setGames] = useState([]);
//   const [error, setError] = useState("");
//   apiClient.get("./games").then((res) => setGames(res.data.results));
//   useEffect(() => {
//     const fetchData = async () => {
//       const json = await fetch("/gaames");
//       const data = await json.json();
//       console.log(data);
//     };
//     fetchData();
//   }, []);
//   return (
//     <ul>
//       {games.map((game) => (
//         <li key={game.id}>{game.name}</li>
//       ))}
//     </ul>
//   );
// }

// export default GameGrid;
