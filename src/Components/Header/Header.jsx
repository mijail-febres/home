import React from "react";
import HeaderContainer from "./HeaderStyles";
import { useHistory } from "react-router";

const Header = (props) => {
    const history = useHistory();

    const handleClickHome = () => {
        history.push('/');
    }
    const handleClickPublications = () => {
        history.push('/publications');
    }
    const handleClickRepos = () => {
        history.push('/repos');
    }
    const handleClickAbout = () => {
        history.push('/about');
    }
    return (
        <HeaderContainer>
            <button className='buttonCategories' onClick={handleClickHome}>Home</button>
            <button className='buttonCategories' onClick={handleClickRepos}>Repos</button>
            <button className='buttonCategories' onClick={handleClickPublications}>Publications</button>
            <button className='buttonCategories' onClick={handleClickAbout}>About me</button>
        </HeaderContainer>
    )
}

export default Header;
