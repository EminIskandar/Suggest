import styled from "styled-components";
import { H2, Body2 } from 'typography'
import colors from 'color'

export const Container = styled.div`
    background: radial-gradient(128.88% 128.88% at 103.9% -10.39%, #E84D70 0%, #A337F6 53.09%, #28A7ED 100%);
    height: 137px;
    width: 255px; 
    border-radius: 10px; 
    padding: 24px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;

    @media (max-width:996px){  
        width: calc(100% / 3 - 6.5px); 
        height: 178px; 
        z-index: 25;
        position: relative;
    }

    @media (max-width:596px){   
        width: 100%;
        border-radius: 0;
        height: 72px;
        align-items: center;
        justify-content: space-between; 
        position: relative;
    }
`
export const Text = styled.div`

`
export const Title = styled(H2)`
    color : ${colors.white};
    @media (max-width:596px){   
        font-size: 15px; 
        font-weight: 700;
        line-height: 22px;
        letter-spacing: -0.1875px; 
    }
`
export const Category = styled(Body2)` 
    color : ${colors.white};  
    @media (max-width:596px){    
        font-size: 13px; 
        font-weight: 500;
        line-height: 19px;
        letter-spacing: 0;    
    } 
`

export const ToggleMenu = styled.div`
    display: none;

    li{
        height: 3px;
        width: 20px; 
        background-color: ${colors.white};
    }

    & ul li:not(:first-child){
        margin-top: 4px;
    }

    &.open{ 
        & ul li:nth-child(2){
            display: none;
        }

        & ul li:nth-child(1){
           transform: rotate(45deg) translate(3px, 2px);
        }

        & ul li:nth-child(3){
           transform: rotate(-45deg) translate(3px, -2px);
        }
    }

    @media (max-width:596px){   
        display: block;
    }
`