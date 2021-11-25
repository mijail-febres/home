import React from "react";
import HeaderContainer from "./HeaderStyles";

const Header = (props) => {
    return (
        <HeaderContainer>
            <button className='buttonCategories'>Home</button>
            <button className='buttonCategories'>Projects</button>
            <button className='buttonCategories'>Repos</button>
            <button className='buttonCategories'>About</button>
        </HeaderContainer>
    )
}

export default Header;