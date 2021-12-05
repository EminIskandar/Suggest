import styled from "styled-components";
import colors from 'color'
import { H3, H4, Body3 } from 'typography'
import {button} from 'themeComponents'

export const Container = styled.div`
    width: 100%; 
    height: 72px;
    border-radius: 10px;
    background-color: ${colors.rhino};
    padding: 0 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width:596px){   
        border-radius: 0;
    }
 
`
export const Left = styled.div`
    display: flex;
    align-items: center;
`
export const Right = styled.div``
export const Suggest = styled.div`
    display: flex;

    @media (max-width: 768px){
        display: none;
    }
`
export const Icon = styled.div`
    margin-right: 16px;
`
export const Count = styled(H3)`
    color: ${colors.white};
`
export const Short = styled.div`
    margin-left: 38px;
    position: relative;

    @media (max-width: 768px){
        margin-left: 0;
    }
`
export const Selected = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;

    & ${Icon}{
        margin-left: 5px;
    }
`
export const Title = styled(Body3)`
    color: ${colors.white};
`
export const Name = styled(H4)`
    color: ${colors.white};
    margin-left: 5px;
`
export const ListItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    & ${Icon}{
        display:none;
    }
    
    &.selected{
        ${Icon}{
            display:block;
        }
    }
`
export const ListName = styled(Body3)`
    color: ${colors.waikawaGrey};
    font-weight: 400;
    padding: 12px 24px;
    border-bottom: 1px solid rgba(53,63,104, 0.15);
    cursor: pointer;
    
    &:hover{
        color: ${colors.electricPurple};
    }
`
export const List = styled.div` 
    width: 255px; 
    background-color: ${colors.white};
    border-radius: 10px;
    position: absolute;
    top:63px;
    display:none;
    box-shadow: 0px 10px 40px -7px #373F6859;

    & ${ListItem}:last-child{
        border-bottom: none;
    }

    &.open{
        display: block;
    }

`
export const Add = styled(button)`

    @media (max-width: 768px){
        width: 138px;
    }
`