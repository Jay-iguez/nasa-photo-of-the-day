import FlavourInfo from "./FlavourInfo"
import InPhotoInfo from "./InPhotoInfo"
import SubPhotoInfo from "./SubPhotoInfo"

export default function MainPhoto(props) {
    return (
        <>
        <div id="mainImage">
            <div id="mainInPhotoParent">
               <InPhotoInfo nasaData={props.nasaData} /> 
            </div>
        </div>
        <SubPhotoInfo nasaData={props.nasaData} />
        <FlavourInfo dogData={props.dogData} />
        </>
    )
}