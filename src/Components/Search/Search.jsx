import React, { Suspense, lazy } from "react";
import { useLocation } from "react-router-dom";
import Barra from "../Barra/Barra";
// import SearchCard from "./SearchCard";

const Search = () => {
  const { state } = useLocation();
  const SearchCard = lazy(() => import("./SearchCard"));

  return (
    <div>
      <Barra />
      {/* Utilizei o suspense e lazy por conta da api que tem um limite de 3 requisição por segundo */}
      <Suspense>
        <SearchCard type={"anime"} value={state.search} />
      </Suspense>
      <Suspense>
        <SearchCard type={"manga"} value={state.search} time={1000} />
      </Suspense>
    </div>
  );
};

export default Search;
