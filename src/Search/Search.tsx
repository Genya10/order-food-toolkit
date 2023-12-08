import React, { useState } from "react";
import cl from "./Search.module.css";

type PropsSearch = {
  handlerSearch: (arg: string) => void;
};

export const Search = (props: PropsSearch) => {
  const [search, setSearch] = useState("");

  return (
    <div className={cl.search}>
      <div style={{ padding: 10 }}>
        <p> Find dish:</p>
        <div>
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Enter search"
          />
          <button onClick={() => props.handlerSearch(search)}>Search</button>
        </div>
      </div>
    </div>
  );
};