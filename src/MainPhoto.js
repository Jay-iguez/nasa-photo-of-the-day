import FlavourInfo from "./FlavourInfo"
import InPhotoInfo from "./InPhotoInfo"
import SubPhotoInfo from "./SubPhotoInfo"
import { useEffect, useState } from "react"
import styled from 'styled-components'



export default function MainPhoto(props) {

    
    const MainImage = styled.div`
    background-color: #aeb6bf;
    background-image: url(${props => props.type});
    background-repeat: no-repeat;
    background-size: cover;
    padding-top: 50%;
    margin: 2rem 1%;
    display: flex;
    justify-content: flex-end;
    border: 1rem inset #6d816e ;
    `

    return (
        <>
        {
             <MainImage type={props.nasaData.url}>
             <InPhotoInfo nasaData={props.nasaData} />
             </MainImage>
        }
        <SubPhotoInfo nasaData={props.nasaData} />
        <FlavourInfo dogData={props.dogData} />
        </>
    )
}