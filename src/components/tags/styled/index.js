import styled from "styled-components";
import colors from 'color'

export const Container = styled.div`
    margin-top: 24px;
    background: ${colors.white};
    height: 166px;
    width: 255px; 
    border-radius: 10px; 
    padding: 24px;
`

export const Tags = styled.div`
    display: flex; 
    flex-wrap: wrap;
    
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
`