import {StyledTitle, StyledSubTitle, Avatar, StyledButton, ButtonGroup, StyledContainer} from "./../../components/Styles";

//logo
import Logo from "./../../logo.png";
import Bg from "./../../bg.png";

const Home = () => {
    return (
        <div>
            <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                backgroundColor: "transparent",
                width: "100%",
                padding: "15px",
                display: "flex",
                justifyContent: "flex-start"  
            }}>
                <Avatar image={Logo} style={{height: "42px", width: "300px"}}
/>
            </div>
            <StyledTitle size={65}>
                Welcome to GIGA SITE
            </StyledTitle>
            <StyledSubTitle size={27}>
                Feel free to explore our page
            </StyledSubTitle>

            <ButtonGroup>
                <StyledButton to="/login">Login</StyledButton>

                <StyledButton to="/register">Register</StyledButton>
            </ButtonGroup>
            
        </div>
    );
}

export default Home;