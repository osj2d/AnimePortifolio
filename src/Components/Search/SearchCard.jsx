import React from "react";
import useFetch from "../../Hooks/useFetch";
import { SEARCH_GET } from "../../api";
import Card from "../Helper/Card";
import styles from "./SearchCard.module.css";
import Error from "../Helper/Error";
import Loading from "../Helper/Loading";
import { motion } from "framer-motion";

const SearchCard = ({ type, value, time = 0 }) => {
  const { data, error, loading, request } = useFetch();
  React.useEffect(() => {
    async function getMangaSearch() {
      const { url, options } = SEARCH_GET(type, value);

      await request(url, options);
    }
    setTimeout(() => {
      getMangaSearch();
    }, time);
  }, [request, value, type, time]);
  if (error) return <Error error={error} />;
  if (loading) return <Loading />;

  if (data) {
    return (
      <div className={`${styles.obras} container mainContainer`}>
        <motion.h2
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className={styles.title}
        >
          {type}
        </motion.h2>
        {data["data"].map((obra) => (
          <motion.div whileHover={{ scale: 1.1 }}>
            <Card key={obra["mal_id"]} obra={obra} tipo={type} />
          </motion.div>
        ))}
      </div>
    );
  }
};

export default SearchCard;
