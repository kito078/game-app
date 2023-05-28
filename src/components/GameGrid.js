import { SimpleGrid, Skeleton, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

const GameList = () => {
  const { games, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} padding="10px" spacing={10}>
      {error && <Text>{error}</Text>}
      {isLoading &&
        skeletons.map((skeleton) => (
          <GameCardContainer>
            <GameCardSkeleton key={skeleton} />
          </GameCardContainer>
        ))}
      {games.map((game) => (
        <GameCardContainer>
          <GameCard key={game.id} game={game} />
        </GameCardContainer>
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
