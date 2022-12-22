import { useEffect } from "react";

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
  useEffect(() => {
    getIPInfo("8.8.8.8");
  }, []);

  return <h2>Set up Successful</h2>;
};

export default App;
