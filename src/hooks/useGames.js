import { useEffect, useState } from "react";
import axios, { CanceledError } from "axios";
import useData from "./useData";

const useGames = () => useData("https://api.rawg.io/api/games");

export default useGames;
