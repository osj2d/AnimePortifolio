import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";
import { MANGA_ID_GET } from "../../api";
import styles from "./Manga.module.css";
import Error from "../Helper/Error";
import Loading from "../Helper/Loading";

const Manga = () => {
  const { id } = useParams();
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    async function getManga() {
      const { url, options } = MANGA_ID_GET(id);
      await request(url, options);
    }
    getManga();
  }, [request, id]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data) {
    const {
      title,
      images,
      synopsis,
      chapters,
      score,
      rank,
      serializations,
      genres,
      status,
    } = data["data"];
    console.log(data);
    return (
      <div className={`${styles.manga} container mainContainer`}>
        <img
          className={styles.img}
          src={images["jpg"]["large_image_url"]}
          alt={title}
        />
        <h1 className={styles.titulo}>{title}</h1>
        <p className={styles.synopsis}>Sinopse: {synopsis}</p>
        {chapters ? <p>Capitulos: {chapters}</p> : <p>Capitulos: NaN</p>}
        {/*  */}
        <p>Nota: {score}</p>
        <p>Rank: {rank}</p>
        <p>Status: {status}</p>
        <div className={styles.serializacao}>
          {serializations.map((serializacao) => (
            <p key={serializacao["mal_id"]}>
              Serialização: {serializacao["name"]}
            </p>
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

export default Manga;
