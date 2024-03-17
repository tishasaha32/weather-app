import React from "react";
import SearchBar from "../component/SearchBar";
import TopCities from "../component/TopCities";

function Search() {
  return (
    <div>
      <SearchBar inSearchComponent={true} />
      <TopCities />
    </div>
  );
}

export default Search;
