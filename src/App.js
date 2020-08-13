import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { BASE_URL, API_KEY } from "./constants/index";
import Pictures from "./components/image";
import Header from "./components/header";
import Explain from "./components/explain";

// import { Pictures, Header } from "./components/";

function App() {
  const [nasaData, getNasaData] = useState({});

  useEffect(() => {
    axios
      .get(`${BASE_URL}${API_KEY}`)
      .then((response) => {
        getNasaData(response.data);
        // console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(nasaData);
  return (
    <div className="App">
      <Header data={nasaData} />
      <Pictures data={nasaData} />
      <Explain data={nasaData} />
    </div>
  );
}

export default App;
