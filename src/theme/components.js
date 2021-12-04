import styled from "styled-components";
import colors from "./color"; 

export const Main = styled.main`
    width: 1440px; 
    margin: 0 auto;
    padding: 94px 165px 0; 
`
export const button = styled.button`
    height: 44px;
    width: 158px; 
    background-color: ${colors.electricPurple} ; 
    font-size: 14px; 
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 0px; 
    transition: all .3s ease-in-out;

    &:hover{
        background-color: ${colors.heliotrope};
    }
`