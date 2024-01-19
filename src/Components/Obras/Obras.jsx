import React from "react";
import useFetch from "../../Hooks/useFetch";
import { SEASSON_GET, TOP_ANIME_GET, TOP_MANGA_GET } from "../../api";
import Card from "../Helper/Card";
import styles from './Obras.module.css'

const Obras = ({ type }) => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    async function getData() {
      switch (type) {
        case "Season": {
          const { url, options } = SEASSON_GET();
          await request(url, options);
          break;
        }
        case "Anime": {
          const { url, options } = TOP_ANIME_GET();
          await request(url, options);
          break;
        }
        case "Manga": {
          const { url, options } = TOP_MANGA_GET();
          await request(url, options);
          break;
        }
      }
    }
    getData();
  }, [request, type]);
  if (error) return console.log(error);
  if (loading) return <p>Carregando</p>;
  if (data)
    return (
      <div className={styles.containerObras}>
        {data["data"].map((obra) => (
            <Card key={obra["mal_id"]} obra={obra} />        
        ))}
      </div>
    );
};

export default Obras;
