export default function SubPhotoInfo(props) {
    return (
        <div id="subPhotoInfo">
            <p id="subPhotoTitle">Title: {props.nasaData.title}</p>
            <p id="subPhotoExplanation">Explanation: {props.nasaData.explanation}</p>
        </div>
    )
}