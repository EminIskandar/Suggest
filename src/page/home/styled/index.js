import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    justify-content: space-between; 

    @media (max-width:996px){  
        display: block;
    }
`

export const LeftSide = styled.div`

    @media (max-width:996px){  
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 40px;
    }

    @media (max-width:596px){   
        width: 100%;
        margin-bottom: 0;
    }

`
export const RightSide = styled.div`
    width: 825px;
    position: relative;

    @media (max-width:1200px){  
        //container width - leftside witdh - distance of between
        width: calc(100% - 255px - 30px)
    }

    @media (max-width:996px){  
        width: 100%;
    }
`
export const ToggleMenu = styled.div``