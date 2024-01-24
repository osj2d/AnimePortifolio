import React from "react";
import useFetch from "../../Hooks/useFetch";
import { SEARCH_GET } from "../../api";
import Card from "../Helper/Card";
import styles from './SearchCard.module.css'
import Error from "../Helper/Error";
import Loading from "../Helper/Loading";


const SearchCard = ({ type, value, time = 0 }) => {
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
  if (error) return <Error error={error} />;
  if (loading) return <Loading />;

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
