import axios from "axios";

export default axios.create({
  base: "https://api.rawg.io/api/games",
  params: {
    key: "11da95f2f2304c89bb370fb6b20d2969",
  },
});
