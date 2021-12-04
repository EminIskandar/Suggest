import styled from "styled-components";
import colors from 'color'
import { H3, Body3, Body1 } from 'typography'

export const Container = styled.div`
    margin-top: 24px;
    background: ${colors.white};
    height: 178px;
    width: 255px; 
    border-radius: 10px; 
    padding: 24px;

    @media (max-width:996px){  
        width: calc(100% / 3 - 6.5px); 
        margin-top: 0px;
    }
`
export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const Title = styled(H3)`
    color : ${colors.cornflowerBlue};
`
export const Link = styled(Body3)`
    color : ${colors.ultramarineBlue};
    text-decoration: underline;
    cursor: pointer;
`

export const Lists = styled.div`

`
export const ListsItem = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 8px 0;
    position: relative;

    &::before{
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 8px;
        height: 8px;
        border-radius: 100%;
    }

    &:nth-child(1)::before{
        background-color: ${colors.blush};
    }

    &:nth-child(2)::before{
        background-color: ${colors.electricPurple};
    }

    &:nth-child(3)::before{
        background-color: ${colors.crystalBlue};
    }
`
export const Name = styled(Body1)`
    color : ${colors.waikawaGrey};
    margin-left: 24px;
    cursor: pointer;
`
export const Count = styled(Body1)`
    color : ${colors.waikawaGrey};
    font-weight: 700;
`