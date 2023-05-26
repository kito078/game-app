import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";

const GameList = () => {
  const { games, error } = useGames();
  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
      padding="10px"
      spacing={10}
    >
      <h1>Game List</h1>
      {error && <Text>{error}</Text>}
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </SimpleGrid>
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
