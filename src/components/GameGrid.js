import { Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";

const GameList = () => {
  const { games, error } = useGames();
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
