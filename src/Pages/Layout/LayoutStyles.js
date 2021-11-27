import styled from "styled-components";

const LayoutContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    #headerContainer{
        width: 100%;
        height: 80px;
    }
    #content{
        width: 100%;
        height: calc(100vh - 80px);
    }
`;

export default LayoutContainer;
