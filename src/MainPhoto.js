import FlavourInfo from "./FlavourInfo"
import InPhotoInfo from "./InPhotoInfo"
import SubPhotoInfo from "./SubPhotoInfo"
import { useEffect, useState } from "react"

export default function MainPhoto(props) {
   
    return (
        <>
        <div id="mainImage">
               <InPhotoInfo nasaData={props.nasaData} /> 
        </div>
        <SubPhotoInfo nasaData={props.nasaData} />
        <FlavourInfo dogData={props.dogData} />
        </>
    )
}