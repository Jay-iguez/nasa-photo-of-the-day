import FlavourInfo from "./FlavourInfo"
import InPhotoInfo from "./InPhotoInfo"
import SubPhotoInfo from "./SubPhotoInfo"
import { useEffect } from "react"

export default function MainPhoto(props) {

    const styles = {
        backgroundColor: '#aeb6bf',
        backgroundImage: 'url("https://dog.ceo/img/dog-ceo-zine.jpg")',
        backgroundSize: 'contain',
        paddingTop: '70%',
      };

    

    useEffect(() => {
        
    }, [])

    return (
        <>
        <div id="mainImage" style={styles}>
            <div id="mainInPhotoParent">
               <InPhotoInfo nasaData={props.nasaData} /> 
            </div>
        </div>
        <SubPhotoInfo nasaData={props.nasaData} />
        <FlavourInfo dogData={props.dogData} />
        </>
    )
}