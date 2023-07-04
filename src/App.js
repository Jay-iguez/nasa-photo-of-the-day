import React, { useState, useEffect } from "react";
import axios from 'axios'
import "./App.css";
import MainPhoto from "./MainPhoto";

function App() {
  const [nasaData, setNasaData] = useState([])
  const [dogData, setDogData] = useState([])

  const data = {
    title: "The shredded loading cheese wheel testing maths.",
    date: "2003-19-01",
    copyright: "ReedeTM",
    explanation: "Wow, such art! Much amaze! Let me tell you about this paw-some masterpiece that I, the mighty Doge Dog, have come across. So picture this: a canvas as vast as the treat aisle at the pet store, and on it, a mesmerizing display of colors that would make a rainbow jealous. It's like a dog's dream come true! In the center of this artwork, there's a doggo, majestic and full of charm, sitting on a fluffy cloud made of floofiness. The doggo has eyes as bright as the sun, shining with such intensity that they could melt even the toughest heart. Such intensity, much wow! Surrounding our canine protagonist are floating bones, each representing the joy and playfulness that dogs bring to the world. They're like tasty treats suspended in mid-air, waiting to be caught with a wagging tail and a wagging tongue. But wait, there's more! The background is a celestial dog park, with planets shaped like tennis balls and stars twinkling like the gleam in my eyes when I spot a squirrel. It's a reminder that the universe is a playground for us four-legged friends, and we bring happiness wherever we go. And speaking of happiness, this artwork radiates it! It's like a burst of laughter and belly rubs captured on a canvas. Looking at it, you can't help but feel a rush of joy, as if a hundred doggos are showering you with wet kisses and playful borks. Oh, and did I mention the caption? It's written in comic sans, of course! It says, 'Much doge, such art, wow!'—a nod to my fellow internet-famous doges. It perfectly captures the essence of this whimsical creation. So, my hooman friends, gaze upon this artwork and let your heart fill with delight. Let the laughter escape your lips like a joyful bark. And remember, in a world full of chaos and seriousness, sometimes all we need is a silly doge-inspired masterpiece to remind us to embrace the simplicity of life and find happiness in the little things. Doge Dog approves this art with a resounding 'Woof!'",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxXnC3fwMwkbIt3ejGRIw3NmbDyUtgS5g2jA&usqp=CAU"
  }

  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
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
    <div className="header">
      <h1 id="appHeader">Jayden's / React's - Very Radical N' "KEWL" NASA Photo Of The Day!</h1>
    </div>
      <MainPhoto nasaData={nasaData} dogData={dogData} />
    </>
    
  );
}

export default App;
