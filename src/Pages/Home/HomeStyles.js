import styled from "styled-components";

const HomeContainer = styled.div`
    width: 100vw;
    height: 100vh;
    * {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    #headerContainer{
        width: 100%;
        height: 80px;
    }
    #bodyContainer{
        width: 100%;
        height: calc(100vh - 80px);
    }
`;

export default HomeContainer;