import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    justify-content: space-between; 
`

export const LeftSide = styled.div`
`
export const RightSide = styled.div`
    width: 825px;
    position: relative;

    @media (max-width:1200px){  
        //container width - leftside witdh - distance of between
        width: calc(100% - 255px - 30px)
    }
`