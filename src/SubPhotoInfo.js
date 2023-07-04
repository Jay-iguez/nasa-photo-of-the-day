export default function SubPhotoInfo(props) {
    return (
        <div id="subPhotoInfo">
            <p id="subPhotoTitle"><span style={{ fontWeight: 'bold', fontSize: '4rem'}}>Title: </span>{props.nasaData.title}</p>
            <p id="subPhotoExplanation"><span style={{ fontWeight: 'bold', fontSize: '4rem'}}>Explanation: </span>{props.nasaData.explanation}</p>
        </div>
    )
}