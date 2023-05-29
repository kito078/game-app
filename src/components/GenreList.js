import React from "react";
import useGenres from "../hooks/useGenre";

function GenreList() {
  const { genres } = useGenres();
  console.log(genres);
  return (
    <ul>
      {genres.map((genre) => (
        <li>{genre.name}</li>
      ))}
    </ul>
  );
}

export default GenreList;
