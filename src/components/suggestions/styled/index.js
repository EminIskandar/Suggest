import styled from "styled-components";
import colors from 'color'
import { H4, H3, Body1 } from 'typography'

export const Container = styled.div`
    @media (max-width:596px){   
       padding: 0 20px;
    }
`
export const Icon = styled.div`

    @media (max-width: 768px){
        display: flex;
        align-items: center;
        justify-content: center;
    }

`
export const Count = styled(H4)`
    color: ${colors.cornflowerBlue};
`
export const Visited = styled.div`
    height: 53px;
    width: 40px; 
    border-radius: 10px;
    background-color: ${colors.selago};
    text-align: center;  
`
export const Description = styled.div`
    margin-left: 40px;
`
export const Title = styled(H3)`
    color: ${colors.cornflowerBlue};
`
export const Text = styled(Body1)`
    color : ${colors.waikawaGrey};
    margin-top: 4px;
`
export const Category = styled(Body1)`
    padding: 5px 16px;
    background-color: ${colors.magnolia};
    color: ${colors.ultramarineBlue};
    display: inline-block;
    border-radius: 10px;
    margin-top:12px;
    text-transform: capitalize;
`
export const CommentsCount = styled.div`
    display: flex; 
    align-items: center;

    & ${Icon}{
        height: 18px;
        margin-right: 8px;;
    }
`
export const Item = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${colors.white};
    padding: 28px 32px;
    border-radius: 10px;
    margin-top: 24px;

    &:not(:first-child){
        margin-top: 20px;;
    }

    @media (max-width:768px){ 
        align-items: flex-end;
    }

    @media (max-width: 768px){
        padding: 24px 25px;
    }
 
`
export const Left = styled.div`
    display: flex;

    @media (max-width:768px){  

        flex-direction: column; 

        & ${Visited}{
            order: 2;
            margin-top: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 32px;
            width: 69px;  
        }
        
        & ${Description}{
            order: 1;
            margin-left: 0px;
        }
    }
`
export const Right = styled.div``