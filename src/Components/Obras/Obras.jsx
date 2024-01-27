import React, { useState } from "react";
import useFetch from "../../Hooks/useFetch";
import { SEASSON_GET, TOP_ANIME_GET, TOP_MANGA_GET } from "../../api";
import Card from "../Helper/Card";
import styles from "./Obras.module.css";
import Error from "../Helper/Error";
import Loading from "../Helper/Loading";

import { motion } from "framer-motion";

const Obras = ({ type }) => {
  const { data, error, loading, request } = useFetch();
  const [tipo, seTipo] = useState("anime");
  React.useEffect(() => {
    async function getData() {
      switch (type) {
        case "Season": {
          const { url, options } = SEASSON_GET();
          await request(url, options);
          seTipo("anime");
          break;
        }
        case "Anime": {
          const { url, options } = TOP_ANIME_GET();
          await request(url, options);
          seTipo("anime");
          break;
        }
        case "Manga": {
          const { url, options } = TOP_MANGA_GET();
          await request(url, options);
          seTipo("manga");
          break;
        }
      }
    }
    getData();
  }, [request, type]);
  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <div className={styles.containerObras}>
        {data["data"].map((obra) => (
          <motion.div whileHover={{ scale: 1.1 }}>
            <Card key={obra["mal_id"]} obra={obra} tipo={tipo} />
          </motion.div>
        ))}
      </div>
    );
};

export default Obras;
