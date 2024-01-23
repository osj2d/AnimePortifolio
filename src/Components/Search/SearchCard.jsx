import React from "react";
import useFetch from "../../Hooks/useFetch";
import { SEARCH_GET } from "../../api";
import Card from "../Helper/Card";
import styles from './SearchCard.module.css'

const SearchCard = ({ type, value, time }) => {
  const { data, error, loading, request } = useFetch();
  React.useEffect(() => {
    async function getMangaSearch() {
      const { url, options } = SEARCH_GET(type, value);
      console.log(url);
      await request(url, options);
    }
    setTimeout(() => {
      console.log(time)
      getMangaSearch();
    }, time);
  }, [request, value, type, time]);
  if (error) return <p>{error}</p>;
  if (loading) return <p>Carregando</p>;

  if (data) {
    return (
      <div className={`${styles.obras} container mainContainer`}>
        <h2 className={styles.title}>{type}</h2>
        {data["data"].map((obra) => (
          <Card key={obra["mal_id"]} obra={obra} tipo={type}/>
        ))}
      </div>
    );
  }
};

export default SearchCard;
