export default function SubPhotoInfo(props) {
    return (
        <div id="subPhotoInfo">
            <p id="subPhotoTitle">{props.nasaData.title}</p>
            <p id="subPhotoExplanation">{props.nasaData.explanation}</p>
        </div>
    )
}