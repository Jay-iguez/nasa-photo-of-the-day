import React, { useState, useEffect } from "react";
import axios from 'axios'
import "./App.css";
import MainPhoto from "./MainPhoto";

function App() {
  const [nasaData, setNasaData] = useState([])
  const [dogData, setDogData] = useState([])

  useEffect(() => {
    axios.get("https://dog.ceo/api/breeds/image/random")
    .then(res => {
      //console.log(res)
      setNasaData(res.data)
    })
    .catch(err => {
      console.error(err)
    })
  },[])

  useEffect(() => {
    axios.get("https://dog.ceo/api/breeds/image/random")
    .then(res => {
      //console.log(res)
      setDogData(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  },[])

  console.log(nasaData, dogData)

  return (
    <>
    <div className="App">
      <h1 id="appHeader">Jayden's / React's - Very Radical N' "KEWL" NASA Photo Of The Day!</h1>
    </div>
      <MainPhoto />
    </>
    
  );
}

export default App;
