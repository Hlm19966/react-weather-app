import React from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import Weather from "./Weather.js"

export default function App() {
  return (
    <div className="App container">
      <Weather defaultCity="New York"/>
      <footer>
        This project coded by{" "}
        <a href="https://www.delac.io" target="_blank" rel="noreferrer">Fatemeh</a>
      {" "}and is{" "}<a href="https://githun.com/hlm1996/react-weather-app"  target="_blank" rel="noreferrer">open-sourced on GitHub.</a>
      </footer>
    </div>
  );
}
