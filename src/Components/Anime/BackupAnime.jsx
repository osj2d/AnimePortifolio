import React from "react";
import Estrutura from "../Estrutura";
import Barra from "../Barra/Barra";
import useFetch from "../../Hooks/useFetch";
import { TOP_ANIME_GET } from "../../api";

const Anime = () => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    async function getTopAnime() {
      const { url, options } = TOP_ANIME_GET();
      await request(url, options);
    }
    getTopAnime();
  }, [request]);
  if (error) return console.log(error);
  if (loading) return console.log(loading);
  if (data)
    return (
      <div>
        <Barra />
        <Estrutura data={data["data"]} />
      </div>
    );
};

export default Anime;
