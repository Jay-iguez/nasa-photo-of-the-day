import FlavourInfo from "./FlavourInfo"
import InPhotoInfo from "./InPhotoInfo"
import SubPhotoInfo from "./SubPhotoInfo"

export default function MainPhoto(props) {
    return (
        <>
        <div id="mainImage">
            color me
        </div>
        <div>
            <InPhotoInfo />
        </div>
        <SubPhotoInfo />
        <FlavourInfo />
        </>
    )
}