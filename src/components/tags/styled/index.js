import styled from "styled-components";
import colors from 'color'

export const Container = styled.div`
    margin-top: 24px;
    background: ${colors.white};
    height: 166px;
    width: 255px; 
    border-radius: 10px; 
    padding: 24px;

    @media (max-width:996px){  
        width: ${ props => props.theme === 'toggle-menu' ? "100%" :'calc(100% / 3 - 6.5px)'};
        height: 178px;
        margin-top: 0px; 
    }

    @media (max-width: 596px){
        display: ${ props => props.theme === 'toggle-menu' ? "" :'none'}
    }
`

export const Tags = styled.div`
    display: flex; 
    flex-wrap: wrap;
    
    @media (max-width: 768px){ 
        height: ${ props => props.theme === 'toggle-menu' ? "auto" :'100%'};
        overflow: hidden;
    }
`

export const Name = styled.div`
    padding: 5px 16px;
    background-color: ${colors.magnolia};
    color: ${colors.ultramarineBlue};
    border-radius: 10px;
    margin-right: 6px;
    margin-bottom: 14px;
    cursor: pointer;

    &.selected {
        background-color: ${colors.ultramarineBlue};
        color: ${colors.white};
    }

    &:hover{
        background-color: ${colors.periwinkle }; 
    }
`