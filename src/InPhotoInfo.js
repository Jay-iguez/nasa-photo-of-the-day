export default function InPhotoInfo(props) {
    return (
        <div id="inPhotoInfo">
        <p id="inPhotoDate">{props.nasaData.date}</p>
        <p id="inPhotoCopyRight">{props.nasaData.copyright}</p>
        </div>
    )
    
}