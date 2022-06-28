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
            </div>
            <StyledTitle size={65}>
                Bienvenue chez GIGA SITE
            </StyledTitle>
            <StyledSubTitle size={27} style={{backgroundColor: "#1F2937", opacity: "0.8", padding: "0", color: "#2176FF"}}>
                Le marché pour les matériaux de construction
            </StyledSubTitle>

            <ButtonGroup>
                <StyledButton to="/login">Login</StyledButton>

                <StyledButton to="/register">Register</StyledButton>
            </ButtonGroup>
            
        </div>
    );
}

export default Home;