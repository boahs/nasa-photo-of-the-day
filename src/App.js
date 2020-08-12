import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { BASE_URL, API_KEY } from "./constants/index";

function App() {
  const [nasaData, getNasaData] = useState({});
  useEffect(() => {
    axios
      .get(`${BASE_URL}${API_KEY}`)
      .then((response) => {
        getNasaData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(nasaData);
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun
        <span role="img" aria-label="go!">
          🚀
        </span>
        !
      </p>
    </div>
  );
}

export default App;
