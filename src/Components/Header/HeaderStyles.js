import styled from "styled-components";

const HeaderContainer = styled.div`
    width: 100%;
    height: 100%;
    background-image: linear-gradient(${props => props.theme.greenColor}, transparent);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;

`;

export const TabButton = styled.button`
    transition: 0.5s;
    background-image: linear-gradient(${props => props.tabStatus? props.theme.lightGreenColor: props.theme.greenColor}, transparent);
    background-color: transparent;
    width: 150px;
    height: 100%;
    font-size: 16px;
    color: ${props => props.tabStatus? props.theme.grayColor: props.theme.darkGreenColor};
    background-size: 200% auto;
    :hover{
        cursor: pointer;
        background-image: linear-gradient(${props => props.theme.lightGreenColor}, transparent);
        color: ${props => props.theme.grayColor};
        text-decoration: underline;
    }
    :last-child {
        border-top-right-radius:50%;
        border-bottom-right-radius:50%;
    }
    :first-child {
        border-top-left-radius:50%;
        border-bottom-left-radius:50%;
    }
`;

export default HeaderContainer;