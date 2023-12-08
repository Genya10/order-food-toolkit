import React, { useState } from "react";
import cl from "./Search.module.css";

type PropsSearch = {
  handlerSearch: (arg: string) => void;
};

export const Search = (props: PropsSearch) => {
  const [search, setSearch] = useState("");

  const handleClear =()=>{
    setSearch('');
    window.location.reload();
  }

  return (
    <div className={cl.search}>
      <div className={cl.search}>
        <p className={cl.titleSearch}> Find dish:</p>
        <div>
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Enter search"
          />
          <button onClick={() => props.handlerSearch(search)}>Search</button>
          <button onClick={() => handleClear()}>Clear</button>
        </div>
      </div>
    </div>
  );
};
