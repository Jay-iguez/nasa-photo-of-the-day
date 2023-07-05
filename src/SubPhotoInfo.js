import styled from 'styled-components'

export default function SubPhotoInfo(props) {

    const SubPhotoInfo = styled.div`
    margin: 2rem 8%;
    p {
        margin: 2rem 0;
    }
    `


    const SubPhotoBold = styled.p`
    font-weight: bold;
    font-size: 4rem;
    `

    return (
        <SubPhotoInfo>
            <p id="subPhotoTitle"><SubPhotoBold>Title:</SubPhotoBold>{props.nasaData.title}</p>
            <p id="subPhotoExplanation"><SubPhotoBold>Explanation: </SubPhotoBold>{props.nasaData.explanation}</p>
        </SubPhotoInfo>
    )
}