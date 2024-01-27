import React from "react";
import { useParams } from "react-router-dom";
import { ANIME_ID_GET } from "../../api";
import useFetch from "../../Hooks/useFetch";
import styles from "./Anime.module.css";
import Error from "../Helper/Error";
import Loading from "../Helper/Loading";
import Head from "../Helper/Head";
import { motion } from "framer-motion";

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
  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
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
      status,
    } = data["data"];
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{opacity: 1}}
        className={`${styles.anime} container mainContainer`}
      >
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
        <Head title={title} />
      </motion.div>
    );
  }
};

export default Anime;
