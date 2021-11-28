import React, {useState} from "react";
import { useHistory } from "react-router";
import HeaderContainer, {TabButton} from "./HeaderStyles";

const Header = (props) => {
    const tabs = ['/', '/repos', '/publications', '/about'];
    const tabName = ['Home', 'Repos', 'Publications', 'About Me'];
    const [tabStatus, setTabStatus] = useState([true, false, false, false]);

    const history = useHistory();

    const handleClickOnTab = (ind) => {
        let newStatus = new Array(tabStatus.length).fill(false);
        newStatus[ind] = true;
        setTabStatus(newStatus);
        history.push(tabs[ind])
    } 

    return (
        <HeaderContainer>
            {tabs.map((tab,ind) => {
                return (
                    <TabButton
                        key={ind}
                        className='buttonCategories'
                        onClick={() => handleClickOnTab(ind)}
                        tabStatus={tabStatus[ind]}
                    >
                        {tabName[ind]}
                    </TabButton>
                )
            })}
        </HeaderContainer>
    )
}

export default Header;
