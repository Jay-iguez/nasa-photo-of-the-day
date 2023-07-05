import React, { useState, useEffect } from "react";
import axios from 'axios'
import "./App.css";
import MainPhoto from "./MainPhoto";
import styled from 'styled-components'

function App() {
  const [nasaData, setNasaData] = useState(null)
  const [dogData, setDogData] = useState([])

  const StyledAppHeader = styled.h1`
    font-size: 6rem;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 2rem;
    border-bottom: 1rem solid grey;
  `
  const StyledAppHeaderName = styled(StyledAppHeader)`
    font-size: 8rem;
    border: 1rem dashed grey;
  `

  const StyledAppHeaderText = styled(StyledAppHeader)`
    border: 1rem dashed grey;
    padding: 3rem 0;
  `

  const loadingData = {
    title: "The spinning pizza of infinite loading",
    date: "Loading... (because time is relative when loading)",
    copyright: "Loading Co.",
    explanation: "Once upon a time in the whimsical land of Loadingville, there existed a legendary spinning pizza. This extraordinary pizza had the power to bring joy and anticipation to anyone who laid their eyes upon it. Legend has it that the pizza was made with a special dough that had the ability to stretch endlessly, just like the loading time of a webpage. Toppings of cheesy excitement, pixelated pepperoni, and sparkling loading sauce adorned its mesmerizing surface. As the pizza spun round and round, it created a vortex of anticipation, filling the air with giggles and suspense. The townsfolk of Loadingville would gather around, eagerly waiting for the pizza to fully load and reveal its delicious secrets. The pizza's aroma was tantalizing, carrying the scent of crispy CSS, succulent JavaScript, and aromatic HTML. Each bite was a burst of loading flavors, making taste buds dance with delight. Every slice held the promise of unexpected surprises, like hidden Easter eggs and whimsical animations. The pizza's cheesy masterpiece brought laughter and wonder to the hearts of all who indulged in its loading goodness. So, my fellow traveler in the vast realm of the internet, let us embrace the spinning pizza of infinite loading with a smile on our faces and patience in our hearts. For in this wondrous realm, loading is not merely a delay but an opportunity for anticipation, a chance to savor the journey before reaching the destination. And as the pizza continues to spin, remember, my friend, that the most delicious things in life are worth the wait. Enjoy the loading spectacle, and may your webpage load with a touch of magic and a sprinkle of loading serendipity! - but the photo above has nothing to do with the story, sorry!",
    url: "https://tophinhanhdep.com/wp-content/uploads/2021/10/Cute-Dog-Wallpapers.jpg"
  }

  useEffect(() => {
    axios.get("https://ai.nasa.gov/planetary/apod?api_key=DEMO_KEY")
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

  return (
    <>
    <StyledAppHeader>
      <StyledAppHeaderName>Jayden's / React's</StyledAppHeaderName><StyledAppHeaderText>- Very Radical N' "KEWL" NASA Photo Of The Day!</StyledAppHeaderText>
    </StyledAppHeader>
      <MainPhoto nasaData={!nasaData ? loadingData : nasaData} dogData={dogData} />
    </>
    
  );
}

export default App;
