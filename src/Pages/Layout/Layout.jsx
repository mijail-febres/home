import Header from "../../Components/Header/Header";
import LayoutContainer from "./LayoutStyles";

const Layout = (props) => {
    return (
        <LayoutContainer>
            <div id='headerContainer'>
                <Header/>
            </div>
            <div id='content'>
                {props.children}
            </div>
        </LayoutContainer>
    )
}

export default Layout;