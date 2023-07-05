import styled from 'styled-components'

export default function InPhotoInfo(props) {

    const StyledInPhoto = styled.div`
        display: flex;
        flex-flow: column;
        color: #fbfcfc;
        font-weight: bold;
    `

    return (
        <StyledInPhoto>
        <p id="inPhotoDate">Date: {props.nasaData.date}</p>
        <p id="inPhotoCopyRight">Copyright: {props.nasaData.copyright}</p>
        </StyledInPhoto>
    )
    
}