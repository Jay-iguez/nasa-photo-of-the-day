import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import styled from 'styled-components'
import spacePhoto from './ascii-art.png'

const StyledMainDiv = styled.div`
background-color:  #27004F;
background-image: url(${spacePhoto});
opacity: 90%;
color: white;
`
const rootElement = document.querySelector("#root")
rootElement.style.border = "2rem ridge #9e9b8b  "
rootElement.style.boxShadow = "inset 1px 1px 150px #000"

ReactDOM.render(<StyledMainDiv><App /></StyledMainDiv>, document.getElementById("root"));

