export default function InPhotoInfo(props) {
    return (
        <div id="inPhotoInfo">
        <p id="inPhotoDate">Date: {props.nasaData.date}</p>
        <p id="inPhotoCopyRight">Copyright: {props.nasaData.copyright}</p>
        </div>
    )
    
}