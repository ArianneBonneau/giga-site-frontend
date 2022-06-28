import styled from 'styled-components';

//background
import background from "./../bg.png";

//react router
import {Link} from 'react-router-dom';

export const colors ={
    primary: "#fff",
    theme: "#2176FF",
    light1: "F3F4F6",
    light2: "#E5E7EB",
    dark1: "#1F2937",
    dark2: "#4B5563",
    dark3: "#9CA3AF",
    red: "#DC2626"
}

//Styled components
export const StyledContainer = styled.div`
    margin: 0;
    min-height: 100vh;
    min-width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    background-image: linear-gradient(rgba(0,0,0,0,6), rgba(0,0,0,0,6)), url(${background});
    background-size: cover;
    background-attachment: fixed;
    opacity: 0.8;
`;

export const StyledTitle = styled.h2`
    font-size: ${(props) => props.size}px;
    text-align: center;
    font-family: "Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    color: ${(props) => props.color ? props.color: colors.primary};
    padding: 5px;
    margin-bottom: 20px; 
`;

export const StyledSubTitle = styled.p`
    font-size: ${(props) => props.size}px;
    text-align: center;
    font-family: "Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    color: ${(props) => props.color ? props.color: colors.primary};
    padding: 5px;
    margin-bottom: 25px; 
`;

export const Avatar = styled.div`
    width: 85px;
    height: 85px;
    border-radius: 0px;
    background-image: url(${props => props.image});
    background-size: cover;
    background-position: center;
    margin: auto;
`;

export const StyledButton = styled(Link)`
    padding: 10px;
    width: 150px;
    background-color: transparent;
    font-size: 16px;
    border: 3px solid ${colors.primary};
    border-radius: 25px;
    color: ${colors.primary};
    text-decoration: none;
    text-align: center;
    transition: ease-in-out 0.3s;

    &:hover {
        background-color: ${colors.primary};
        color: ${colors.theme};
        cursor: pointer;
    }
`;

export const ButtonGroup = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    margin-top: 50px;
`;

//Input
export const StyledTextInput = styled.input`
    width: 280px;
    padding: 10px;
    padding-left: 45px;
    font-size: 18px;
    letter-spacing: 1px;
    font-family: "Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    color: ${colors.dark1};
    background-color: ${colors.light2};
    border: 0;
    outline:0;
    display: block;
    margin: 5px auto 0 -10px;
    transition: ease-in-out 0.3s;

    ${(props) => props.invalid && `background-color: ${colors.red}; color: ${colors.primary};`}

    &:focus{
        background-color: ${colors.dark2};
        color: ${colors.primary};
    }
`;

export const StyledCheckbox = styled.input`
    display: flex;
    margin-right: 0px;
    
`;

export const StyledLabel = styled.p`
    text-align: left;
    font-size: 15px;
    font-weight: bold;
    font-family: "Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    :after {
        content:" *";
        color: ${colors.red};
        display:inline;
    }
    `;

export const StyledLabel2 = styled.p`
    text-align: left;
    font-size: 15px;
    font-weight: bold;
    font-family: "Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
`;

export const StyledFormArea = styled.div`
    background-color: ${colors.primary};
    text-align: center;
    padding: 5px 0px 5px 45px;
    margin-top: 10px
`;

export const StyledLoginArea = styled.div`
    background-color: ${colors.primary};
    text-align: center;
    padding: 5px 55px;
`;

export const StyledFormButton = styled.button`
        padding: 10px;
        width: 150px;
        background-color: transparent;
        font-family: "Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
        font-size: 16px;
        border: 3px solid ${colors.theme};
        border-radius: 25px;
        color: ${colors.theme};
        transition: ease-in-out 0.3s;

        &:hover {
           background-color: ${colors.theme};
          color: ${colors.primary};
          cursor: pointer;
        }
`;

export const ErrorMsg = styled.div`
        font-size: 11px;
        color: ${colors.red};
        font-family: "Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
        margin-bottom: 10px;
        text-align: left;
`;

export const ExtraText = styled.p`
        font-size:${(props) => props.size}px;
        text-align: center;
        font-family: "Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";

        color: ${(props) => (props.color ? props.color : colors.dark2)};
        padding: 2px;
        margin-top: 10px;
`;

export const TextLink = styled(Link)`
        text-decoration: none;
        color: ${colors.theme};
        transition: ease-in-out 0.3s;
        font-family: "Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";


        &:hover {
            text-decoration: underline;
            letter-spacing: 3px;
            font-weight: bold;
        }
`;

//Icons
export const StyledIcon = styled.p`
    color: ${colors.dark1};
    position: absolute;
    font-size: 21px;
    top: 45px;
    ${(props) => props.right && `right: 50px; `};
    ${(props) => props.right && `left: 200px;`};
`;

//copyright
export const CopyRightText = styled.p`
        padding: 25px;
        // margin: 20px;
        font-family: "Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
        text-align: center;
        color: ${colors.light2};
        background-color: #1e519b;
`;


