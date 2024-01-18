import React from "react";
import Estrutura from "../Estrutura";
import useFetch from "../../Hooks/useFetch";
import { TOP_MANGA_GET } from "../../api";

const Manga = () => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    async function getTopManga() {
      const { url, options } = TOP_MANGA_GET();
      await request(url, options);
    }
    getTopManga();
  }, [request]);

  if (error) return console.log(error);
  if (loading) return console.log(loading);
  if (data)
    return (
      <div>
        <Estrutura data={data["data"]} />
      </div>
    );
};

export default Manga;
