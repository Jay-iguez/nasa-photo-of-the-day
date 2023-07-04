import FlavourInfo from "./FlavourInfo"
import InPhotoInfo from "./InPhotoInfo"
import SubPhotoInfo from "./SubPhotoInfo"
import { useEffect, useState } from "react"

export default function MainPhoto(props) {
    const [nasaStyle, setNasaStyle] = useState({})

    const loadingStyle = {
        backgroundColor: '#aeb6bf',
        backgroundImage: 'url("https://cdn.theatlantic.com/thumbor/4yvwK5FFj-1aC7UCTkbAgt5NIY4=/1x0:2499x1405/750x422/media/img/mt/2020/12/HUBBLE_opener_01/original.jpg")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        paddingTop: '50%',
        margin: '2rem 1%',
        display: 'flex',
        justifyContent: 'flex-end'
    }
    
    useEffect(() => {

    const newStyle = {
        backgroundColor: '#aeb6bf',
        backgroundImage: `url(${props.nasaData.url})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        paddingTop: '50%',
        margin: '2rem 1%',
        display: 'flex',
        justifyContent: 'flex-end'
        }

        setNasaStyle(newStyle)
    }, [props.nasaData])

    return (
        <>
        <div id="mainImage" style={!nasaStyle ? loadingStyle : nasaStyle}>
               <InPhotoInfo nasaData={props.nasaData} /> 
        </div>
        <SubPhotoInfo nasaData={props.nasaData} />
        <FlavourInfo dogData={props.dogData} />
        </>
    )
}