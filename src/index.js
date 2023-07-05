import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import styled from 'styled-components'
import spacePhoto from './ascii-art.png'

const StyledMainDiv = styled.div`
background-color:  #27004F;
background-image: url(${spacePhoto});
opacity: 10%;
color: white;
`

const mainBackground = document.querySelector("body")
mainBackground.style.background = " #650cab "


ReactDOM.render(<StyledMainDiv><App /></StyledMainDiv>, document.getElementById("root"));
