import React from "react";
import { useEffect, useState } from "react";

import Map from "./Map.jsx";

import SearchIcon from "./search.svg";

const IPGeolocationAPI_URL =
  "https://geo.ipify.org/api/v2/country,city?apiKey=at_0c66UA3HLK61AmV0N9mZepyBSWmFh";

const getIPInfo = async (IPAddress) => {
  const response = await fetch(
    `${IPGeolocationAPI_URL}${IPAddress ? `&ipAddress=${IPAddress}` : ""}`
  );

  const IPInfo = await response.json();

  console.log(IPInfo);

  return IPInfo;
};

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const [IPCoordinates, setIPCoordinates] = useState("");

  const performSearch = async (searchTerm) => {
    const IPInfo = await getIPInfo(searchTerm);

    const IPCoordinates = [IPInfo.location.lat, IPInfo.location.lng];

    setIPCoordinates(IPCoordinates);
  };

  useEffect(() => {
    performSearch("");
  }, []);

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          performSearch(searchTerm);
        }}
      >
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
      {IPCoordinates !== "" ? (
        <Map coordinates={IPCoordinates} />
      ) : (
        <p>loading map ...</p>
      )}
    </>
  );
};

export default App;

// TODO: look into asynchronous rendering and conditional rendering so as to render the users location on first entering the site
// TODO: THE USER SHOULDN'T HAVE TO WONDER WHETHER HIS/HER request has been registered --- loading bars for loading maps and resources
// TODO: auto panning or zooming of map to auto display new coordinates
