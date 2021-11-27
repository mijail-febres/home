import styled from "styled-components"

const PublicationsContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    #publications {
        width: 60%;
        overflow: auto;
        padding: 40px;
        .LiCategory {
            font-size: 26px;
            font-weight: 600;
            padding: 20px;
        }
        .LiItems {
            font-size: 20px;
            padding: 10px;
            text-align: justify;
        }
        .HLink {
            font-size: 20px;
            color: ${props => props.theme.greenColor};
        }
        .LocalRepo {
            font-size: 20px;
            color: ${props => props.theme.greenColor};
        }
    }
`

export default PublicationsContainer;
