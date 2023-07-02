import FlavourInfo from "./FlavourInfo"
import InPhotoInfo from "./InPhotoInfo"
import SubPhotoInfo from "./SubPhotoInfo"

export default function MainPhoto(props) {
    return (
        <>
        <div id="mainImage">
            <img src="https://dog.ceo/img/dog-ceo-zine.jpg"></img>
            <InPhotoInfo />
        </div>
        <SubPhotoInfo />
        <FlavourInfo />
        </>
    )
}