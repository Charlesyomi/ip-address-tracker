import React from "react";
import { useEffect, useState } from "react";

import Map from "./Map.jsx";

import SearchIcon from "./search.svg";

const IPGeolocationAPI_URL =
  "https://geo.ipify.org/api/v2/country?apiKey=at_0c66UA3HLK61AmV0N9mZepyBSWmFh";

// const IPAddress = " 8.8.8.8";

const getIPInfo = async (IPAddress) => {
  const response = await fetch(
    `${IPGeolocationAPI_URL}${IPAddress ? `&${IPAddress}` : ""}`
  );

  const IPInfo = await response.json();

  console.log(IPInfo);
};

// const getMappingInfo = async () => {};

const App = () => {
  // useEffect(() => {
  //   getIPInfo("8.8.8.8");
  // }, []);

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <form onSubmit={() => {}}>
        <input
          placeholder="Search IP Address"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />

        <input type="image" alt="search" src={SearchIcon} />
      </form>
      <h2>Set up Successful</h2>
      <Map />
    </>
  );
};

export default App;
