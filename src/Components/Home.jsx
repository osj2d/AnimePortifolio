import React from "react";
import Barra from "./Barra/Barra";
import Estrutura from "./Estrutura/";
import { SEASSON_GET } from "../api";
import useFetch from "../Hooks/useFetch";

const Home = () => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    async function getDataSeasson() {
      const { url, options } = SEASSON_GET();
      await request(url, options);
    }
    getDataSeasson();
  }, [request]);
  if (error) return console.log(error);
  if (loading) return console.log(loading);
  if (data)
    return (
      <main>
        <Barra />
        <Estrutura data={data["data"]} />
      </main>
    );
};

export default Home;
