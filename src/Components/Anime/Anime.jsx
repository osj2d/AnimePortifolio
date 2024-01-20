import React from "react";
import { useParams } from "react-router-dom";
import { ANIME_ID_GET } from "../../api";
import useFetch from "../../Hooks/useFetch";
import styles from "./Anime.module.css";

const Anime = () => {
  const { id } = useParams();
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    async function getAnime() {
      const { url, options } = ANIME_ID_GET(id);
      await request(url, options);
    }
    getAnime();
  }, [request, id]);
  if (error) return console.log(error);
  if (loading) return <p>Carregando</p>;
  if (data) {
    const {
      title,
      images,
      synopsis,
      episodes,
      score,
      rank,
      studios,
      genres,
      trailer,
      status,
    } = data["data"];
    console.log(trailer);
    return (
      <div className={`${styles.anime} container mainContainer`}>
        <img
          className={styles.img}
          src={images["jpg"]["large_image_url"]}
          alt={title}
        />
        <h1 className={styles.titulo}>{title}</h1>
        <p className={styles.synopsis}>Sinopse: {synopsis}</p>
        <p>Episodios: {episodes}</p>
        <p>Nota: {score}</p>
        <p>Rank: {rank}</p>
        <p>Status: {status}</p>
        <div>
          {studios.map((studio) => (
            <p key={studio["mal_id"]}>Estudio: {studio["name"]}</p>
          ))}
        </div>
        <div className={styles.generos}>
          <h3>Generos</h3>
          {genres.map((gender) => (
            <p key={gender["mal_id"]}>{gender["name"]}</p>
          ))}
        </div>
      </div>
    );
  }
};

export default Anime;
