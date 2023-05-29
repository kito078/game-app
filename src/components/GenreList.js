import React from "react";
import useGenres from "../hooks/useGenre";

function GenreList() {
  const { data } = useGenres();

  return (
    <ul>
      {data.map((data) => (
        <li>{data.name}</li>
      ))}
    </ul>
  );
}

export default GenreList;
